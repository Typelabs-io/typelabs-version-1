import React, { useState } from "react";

const Hero = () => {
  return (
    <div class="mx-4 md:mx-8 lg:mx-16 h-screen flex justify-center items-center flex-col">
      <h1 class="w-full md:w-2/3 text-2xl md:text-3xl lg:text-4xl font-secular text-center leading-tight text-black mb-1">
        Unlock the Power of Communication for Your Product
      </h1>
      <h2 class=" mona text-base text-center text-black mb-10">
        Deliver your message with clarity and precision through our technical
        writing and design solutions.
      </h2>
      <form class="flex flex-col items-center mb-2">
        <input
          className="border border-accent hover:border-Leal mona text-base rounded-md px-4 py-3 mb-4 w-80 md:w-96"
          type="email"
        />
        <div>
          <button class="bg-Teal mona text-base text-white font-medium py-2 px-4 rounded-md">
            I want in
          </button>
        </div>
      </form>
      <h2 className="mona text-base text-center text-black">
        {" "}
        Join our waitlist for a{" "}
        <span className="text-Teal font-bold"> free quote!</span>{" "}
      </h2>
    </div>
  );
};

export default Hero;
