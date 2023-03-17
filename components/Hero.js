import React, { useState } from "react";

const Hero = () => {
  return (
    <div class=" h-screen flex justify-center items-center flex-col">
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-secular text-center leading-tight text-black mb-1">
        Unlock the Power of
        <br /> Communication for Your
        <br />
        Product
      </h1>
      <h2 class=" mona text-base text-center text-black mb-1">
        Deliver your message with clarity and precision through our technical
        writing and design solutions.
      </h2>
      <h2 className="mona text-base text-center text-black mb-4">
        {" "}
        Join our waitlist for a{" "}
        <span className="text-Teal font-bold"> free quote!</span>{" "}
      </h2>
      <form onSubmit={handleSubmit} class="flex flex-col items-center">
        <input
          className="border border-Teal  focus:border-Teal mona text-base rounded-md px-4 py-3 mb-4 w-80 md:w-96"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Your email"
          required
        />

        <div>
          <button class="bg-Teal mona text-base text-white font-medium py-2 px-4 rounded-md">

      <form class="flex flex-col items-center">
        <input class="border border-Teal  focus:border-Teal rounded-md px-4 py-3 mb-4 w-80 md:w-96" />
        <div class="border-t border-gray-300 mb-4">
          <button
            type="submit"
            class="bg-Teal text-white font-semibold py-2 px-4 rounded-md"
          >
            I want in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
