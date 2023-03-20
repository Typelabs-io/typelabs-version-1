import React from "react";

const SplitScreen = ({ left: Left, right: Right }) => {
  // props for the left and right hand will be passed in the App.jsx
  return (
    <div className="px-4 md:px-8 lg:px-16 flex flex-col md:flex-row">
      <div className=" w-full md:w-1/2 pr-4 md:border-r-2 md:border-accent hidden md:block">
        {/* Hidden on smaller devices */}
        <Left />
      </div>
      <div className="w-full md:w-1/2">
        {/* Visible on all devices */}
        <Right />
      </div>
      <div className="w-full md:w-1/2 md:hidden">
        {/* Visible only on smaller devices */}
        <Left />
      </div>
    </div>
  );
};

export default SplitScreen;
