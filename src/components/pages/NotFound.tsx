import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getTranslation } from '../../utils/translations';
import Button from '../atoms/Button';

interface NotFoundProps {
  language: 'en' | 'fr';
}

const NotFound: React.FC<NotFoundProps> = ({ language }) => {
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    console.error('404 Page Rendered', {
      pathname: location.pathname,
      search: location.search,
      params: params
    });
  }, [location, params]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-center px-4">
      <h1 className="text-6xl font-bold dark:text-colorQuaternary/80 text-colorTertiary/80 mb-4">404</h1>
      <p className="text-2xl text-colorMain dark:text-colorWhite mb-8">
        {getTranslation('notFoundTitle', language)}
      </p>
      <p className="text-lg text-colorMain dark:text-colorWhite mb-8">
        {getTranslation('notFoundDescription', language)}
      </p>
      <Button 
        children={getTranslation('notFoundButtonText', language)}
        aria-label="Return to home page"
        className="rounded transition duration-300"
        href="/"
        type="primary"
      />
    </div>
  );
};

export default NotFound;
