import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar w-[400px] h-full z-50 p-4 md:p-10">
      {/* Sidebar content goes here */}
      <div className="font-sans text-colorWhite text-2xl space-y-8">
        <p>Ask me something</p>
        <p>My skillset</p>
        <p>My projects</p>
      </div>
    </div>
  );
};

export default Sidebar;
