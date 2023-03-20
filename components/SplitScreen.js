import React from "react";

const SplitScreen = ({ left: Left, right: Right }) => {
  // props for the left and right hand will be passed in the App.jsx
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <Left />
      </div>
      <div className="w-full md:w-1/2">
        <Right />
      </div>
    </div>
  );
};

export default SplitScreen;
