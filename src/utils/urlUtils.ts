// Scroll to the section corresponding to the current hash when the page is loaded
// This function have been added to handle the scrolling behavior when a hash is present in the URL
export const scrollToHashSection = () => {
  // Get the current hash from the URL
  const hash = window.location.hash;
  
  // If there's a hash, try to scroll to the corresponding element
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      // Smooth scroll to the element
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

// Function to handle anchor link clicks and update URL
export const handleAnchorLinkClick = (event: Event) => {
  const target = event.target as HTMLAnchorElement;
  
  // Check if the link is an anchor link
  if (target.tagName === 'A' && target.hash) {
    // Prevent default navigation
    event.preventDefault();
    
    // Update URL without page reload
    window.history.pushState(null, '', target.hash);
    
    // Scroll to the section
    const element = document.querySelector(target.hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

// Function to add hash change listener
export const setupHashChangeListener = () => {
  // Scroll on initial load
  scrollToHashSection();
  
  // Add listener for future hash changes
  window.addEventListener('hashchange', scrollToHashSection);
  
  // Add click listener for anchor links
  document.addEventListener('click', handleAnchorLinkClick);
  
  // Optional: cleanup function to remove listeners if needed
  return () => {
    window.removeEventListener('hashchange', scrollToHashSection);
    document.removeEventListener('click', handleAnchorLinkClick);
  };
};
