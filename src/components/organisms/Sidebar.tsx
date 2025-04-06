import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar fixed top-20 left-0 w-[250px] h-full z-50 overflow-y-auto">
      {/* Sidebar content goes here */}
      <div className="font-sans text-colorWhite text-xl space-y-8 px-4 md:px-10 pt-10">
        <p className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">Ask me something</p>
        <p className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">My skillset</p>
        <p className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">My projects</p>
        <p className="cursor-pointer hover:text-colorQuaternary transition-all duration-300 ease-in-out whitespace-nowrap">Contact me</p>
      </div>
    </div>
  );
};

export default Sidebar;
