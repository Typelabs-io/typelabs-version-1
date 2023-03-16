import React from "react";

const Hero = () => {
  return (
    <div class=" h-screen flex justify-center items-center flex-col">
      <h1 class="text-4xl md:text-7xl font-secular text-center  text-gray-800 mb-8">
        Unlock the Power of
        <br /> Communication for Your
        <br />
        Product
      </h1>
      <h2 class=" mona text-lg md:text-xl text-center text-gray-800 mb-4">
        Deliver your message with clarity and precision through our technical
        writing and design solutions.
      </h2>
      <h2 className=" mona text-lg md:text-xl text-center text-gray-800 mb-4">
        {" "}
        Join our waitlist for a{" "}
        <span className="text-Teal font-bold"> free quote!</span>{" "}
      </h2>
      <form class="flex flex-col items-center">
        <input
          class="border border-Teal  focus:border-Teal rounded-md px-4 py-3 mb-4 w-80 md:w-96"
          type="email"
          placeholder="Your email"
        />
        <div class="border-t border-gray-300 mb-4">
          <button class="bg-Teal text-white font-semibold py-2 px-4 rounded-md">
            I want in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
