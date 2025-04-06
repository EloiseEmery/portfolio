import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar w-[400px] h-full z-50 p-4 md:p-10">
      {/* Sidebar content goes here */}
      <div className="font-sans text-colorWhite text-xl space-y-8">
        <p className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">Ask me something</p>
        <p className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">My skillset</p>
        <p className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">My projects</p>
      </div>
    </div>
  );
};

export default Sidebar;
