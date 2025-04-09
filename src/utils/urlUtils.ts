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

// Function to add hash change listener
export const setupHashChangeListener = () => {
  // Scroll on initial load
  scrollToHashSection();
  
  // Add listener for future hash changes
  window.addEventListener('hashchange', scrollToHashSection);
  
  // Optional: cleanup function to remove listener if needed
  return () => {
    window.removeEventListener('hashchange', scrollToHashSection);
  };
};
