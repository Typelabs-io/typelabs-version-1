import React from "react";

const RightSide = () => {
  return (
    <div className="mona h-screen flex items-center">
      <div className="bg-white md:p-6 rounded-lg mx-auto">
        <p className="tracking-wider  text-md leading-normal">
          {" "}
          We are currently in the process of building our agency, and
          <br />
          are excited to launch soon. If you are interested in our <br />
          services and would like to be notified when we launch, join <br />
          our waitlist and get a{" "}
          <span className="font-bold text-Reef200"> FREE QUOTE.</span>
        </p>
        <div class="mx-auto">
          <form class="shadow-md rounded pt-6 mb-1">
            <div class="mb-2">
              <input
                class="shadow appearance-none border-2 rounded-md w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div class="mb-5">
              <input
                class="shadow appearance-none border-2 rounded-md w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="johndoe@example.com"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="w-full bg-Reef200 hover:bg-Reef300 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                PUT ME ON THE LIST
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
