import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    if (isValidEmail) {
      // Submit the form
      e.target.submit();
    } else {
      // Show an error message or do something else
      console.log("Invalid email");
    }
  };

  return (
    <div className="bg-reef-100 flex flex-col justify-center items-center p-1 rounded-xl tablet:rounded-2xl">
      <div className="bg-white flex flex-col justify-center items-center p-4 tablet:p-6 gap-4 tablet:gap-6 rounded-lg tablet:rounded-xl border border-solid border-reef-200">
        <p className="font-work text-left text-sm desktop:text-base ">
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
          className="flex flex-col w-full font-work text-base"
          onSubmit={handleSubmit} // Add this event handler
        >
          <input
            type="text"
            name="FIRSTNAME"
            placeholder="Your first name"
            required
            data-required="true"
            className="w-full px-6 py-3 mb-2 tablet:mb-4 border border-solid border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-reef-100 caret-reef-200"
          />
          <input
            type="email"
            name="EMAIL"
            placeholder="Your email"
            required
            data-required="true"
            value={email}
            onChange={handleChange}
            className="w-full px-6 py-3 mb-6 tablet:mb-8 border border-solid border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-reef-100 caret-reef-200"
          />
          <button className="uppercase font-medium rounded px-6 py-3 bg-reef-200 hover:bg-reef-300 border border-solid border-reef-300 focus:outline-none focus:ring focus:ring-reef-100 text-white">
            Get a free quote now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
