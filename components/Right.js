import React from "react";
import Foot from "./Foot";

const Right = () => {
  return (
    <div className=" bg-transparent pr-4 tablet:pr-8 desktop:pr-20 desktop:w-1/2">
      <div className="bg-reef-100 mt-4 tablet:mt-8 desktop:mt-20 w-4/5 flex flex-col justify-center items-center p-1 rounded-2xl">
        <div className="bg-white flex flex-col justify-center items-center p-6 gap-6 rounded-xl border border-solid border-reef-200">
          <p className="mona text-sm ">
            We are currently in the process of building our agency, and are
            excited to launch soon. If you are interested in our services and
            would like to be notified when we launch, sign up for our waitlist
            below and get a{" "}
            <span className="font-medium text-reef-200 uppercase">
              free quote
            </span>
            .
          </p>
          <form className="w-full mona text-sm flex flex-col">
            <input
              type="text"
              placeholder="Your name"
              className="mb-2 px-6 py-3 border border-solid border-gray-200 w-full rounded"
            />
            <input
              type="email"
              placeholder="Your email"
              className="mb-6 px-6 py-3 border border-solid border-gray-200 w-full rounded"
            />
            <button className="uppercase text-white font-medium rounded px-6 py-3 bg-reef-200 border border-solid border-reef-300">
              Give me the quote
            </button>
          </form>
        </div>
      </div>
      <Foot />
    </div>
  );
};

export default Right;
