#!/bin/bash

# Define the domains for which to obtain certificates
domains=(eloemery.com www.eloemery.com)
rsa_key_size=4096
data_path="./data/certbot"
email="eloise.emery@hotmail.com"
staging=0 # Set to 0 for production certificates
compose_file="docker-compose.prod.yml"

# Create required directories
echo "### Creating required directories..."
mkdir -p "$data_path/conf"
mkdir -p "$data_path/www"
mkdir -p "./logs/nginx"

# Set proper permissions
echo "### Setting proper permissions..."
chmod -R 755 "$data_path"
chmod -R 755 "./logs"

# Stop any running containers and remove volumes
echo "### Stopping existing containers..."
docker-compose -f $compose_file down -v

# Remove any existing certificates
echo "### Cleaning up old certificates..."
rm -rf "$data_path/conf/"*
rm -rf "$data_path/www/"*

echo "### Downloading recommended TLS parameters ..."
if [ ! -e "$data_path/conf/options-ssl-nginx.conf" ]; then
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > "$data_path/conf/options-ssl-nginx.conf"
fi

if [ ! -e "$data_path/conf/ssl-dhparams.pem" ]; then
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > "$data_path/conf/ssl-dhparams.pem"
fi

# Create dummy certificates for initial nginx startup
echo "### Creating dummy certificates..."
domain_path="/etc/letsencrypt/live/${domains[0]}"
mkdir -p "$data_path/conf/live/${domains[0]}"

# Create dummy certificate
docker-compose -f $compose_file run --rm --entrypoint "\
  openssl req -x509 -nodes -newkey rsa:$rsa_key_size -days 1\
    -keyout '$domain_path/privkey.pem' \
    -out '$domain_path/fullchain.pem' \
    -subj '/CN=localhost'" certbot

echo "### Starting nginx..."
docker-compose -f $compose_file up -d nginx

# Wait for nginx to start
echo "### Waiting for nginx to start..."
sleep 5

# Check if nginx is running by checking its process
if docker-compose -f $compose_file exec nginx ps aux | grep -q "[n]ginx: worker process"; then
  echo "### Nginx started successfully!"
else
  echo "Error: nginx failed to start. Checking logs..."
  echo "### Nginx configuration test:"
  docker-compose -f $compose_file exec nginx nginx -t || true
  echo "### Nginx error log:"
  docker-compose -f $compose_file exec nginx cat /var/log/nginx/error.log || true
  docker-compose -f $compose_file logs nginx
  exit 1
fi

# Verify that the ACME challenge directory is accessible
echo "### Testing ACME challenge directory..."
curl -v http://eloemery.com/.well-known/acme-challenge/test || true

# Delete dummy certificates
echo "### Deleting dummy certificates..."
docker-compose -f $compose_file run --rm --entrypoint "\
  rm -Rf /etc/letsencrypt/live/${domains[0]} && \
  rm -Rf /etc/letsencrypt/archive/${domains[0]} && \
  rm -Rf /etc/letsencrypt/renewal/${domains[0]}.conf" certbot

# Request Let's Encrypt certificate
echo "### Requesting Let's Encrypt certificate..."
domain_args=""
for domain in "${domains[@]}"; do
  domain_args="$domain_args -d $domain"
done

# Select appropriate certbot command based on staging flag
staging_arg=""
if [ $staging != "0" ]; then
  staging_arg="--staging"
fi

echo "### Running certbot with args: $domain_args $staging_arg"
docker-compose -f $compose_file run --rm --entrypoint "\
  certbot certonly --webroot -w /var/www/certbot \
    --email $email \
    $domain_args \
    $staging_arg \
    --rsa-key-size $rsa_key_size \
    --agree-tos \
    --force-renewal \
    --non-interactive \
    -v" certbot

# Check certbot logs
echo "### Checking certbot logs..."
docker-compose -f $compose_file run --rm --entrypoint "cat /var/log/letsencrypt/letsencrypt.log" certbot

echo "### Starting all services..."
docker-compose -f $compose_file up -d

echo "### Success! Your website is now running!"
if [ $staging != "0" ]; then
  echo "### IMPORTANT: You are using staging certificates. These are not trusted."
  echo "### Once you confirm everything works, edit this script to set staging=0"
  echo "### Then run the script again to get real certificates."
else
  echo "### Your website is using real HTTPS certificates!"
fi
echo "### You can access it at: https://${domains[0]}"
echo "### To view logs: docker-compose -f $compose_file logs -f"
