import React from "react";

const RightSide = () => {
  return (
    <div className="mona h-screen flex justify-center mx-auto">
      <div className="flex flex-col justify-center items-center">
        <p className="tracking-wide leading-normal">
          {" "}
          We are currently in the process of building our agency, and
          <br />
          are excited to launch soon. If you are interested in our <br />
          services and would like to be notified when we launch, join <br />
          our waitlist and get a <span className="font-bold"> FREE QUOTE</span>
        </p>
        <form>
          <input />
          <input />
          <button> PUT ME ON THE LIST</button>
        </form>
      </div>
    </div>
  );
};

export default RightSide;
