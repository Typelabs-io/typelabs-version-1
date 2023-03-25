import React from "react";

const Form = () => {
  return (
    <div className="bg-reef-100 flex flex-col justify-center items-center p-1 rounded-xl tablet:rounded-2xl">
      <div className="bg-white flex flex-col justify-center items-center p-4 tablet:p-6 gap-4 tablet:gap-6 rounded-lg tablet:rounded-xl border border-solid border-reef-200">
        <p className="font-work text-justify text-sm desktop:text-base ">
          We&apos;re thrilled to announce that our agency will be launching in
          the 2nd quarter of 2023. As we work towards our launch, we invite you
          to join our waitlist and be the first to receive a{" "}
          <span className="font-medium text-reef-200 uppercase">
            free quote
          </span>{" "}
          from us.
        </p>
        <form
          method="POST"
          action="https://590be23d.sibforms.com/serve/MUIEAMtS01aHYZ5cQ2kQ0S_rxOBsJANOkTAK9U99qtbaIjoq30lt2YAlpIdK7zHIAG_Jbyas65edZ6_K8gKYgqyuZPJsebgfsTCpDKrHBCypBRa0lqj5gSmlCPximOMAnJzhfizX4chUFKVbnwsdvLo6ryd4zbRT8P8Lc8QNK5MTZfp0bj5pF0iqwHelk6rh97BPGe5vnBlZ1mN1"
          data-type="subscription"
          className="w-full font-work text-sm desktop:text-base flex flex-col"
        >
          <input
            type="text"
            placeholder="Your first name"
            data-required="true"
            required
            name="FIRSTNAME"
            className="mb-1 tablet:mb-2 px-4 tablet:px-6 py-2 tablet:py-3 border border-solid border-gray-200 w-full rounded focus:outline-none focus:ring-1 focus:ring-reef-100 caret-reef-200"
          />
          <input
            type="email"
            placeholder="Your email"
            name="EMAIL"
            data-required="true"
            required
            className="mb-4 tablet:mb-6 px-4 tablet:px-6 py-2 tablet:py-3 border border-solid border-gray-200 w-full rounded focus:outline-none focus:ring-1 focus:ring-reef-100 caret-reef-200"
          />
          <button
            className="uppercase text-white font-medium rounded px-4 tablet:px-6 py-2 tablet:py-3 
                    bg-reef-200 hover:bg-reef-300 border border-solid border-reef-300
                    focus:outline-none focus:ring focus:ring-reef-100"
          >
            Get a free quote now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
