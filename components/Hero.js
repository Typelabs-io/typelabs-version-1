import React, { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Hero = () => {
  const [formData, setFormData] = useState({ email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { email } = formData;
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
      <h2 className="mona text-lg md:text-xl text-center text-gray-800 mb-4">
        {" "}
        Join our waitlist for a{" "}
        <span className="text-Teal font-bold"> free quote!</span>{" "}
      </h2>
      <form onSubmit={handleSubmit} class="flex flex-col items-center">
        <input
          class="border border-Teal  focus:border-Teal rounded-md px-4 py-3 mb-4 w-80 md:w-96"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Your email"
          required
        />
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
