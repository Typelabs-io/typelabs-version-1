import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="font-work font-medium text-center text-3xl tablet:text-4xl desktop:text-5xl large:text-6xl text-black mb-8">
        Welcome to{" "}
        <span className="underline hover:decoration-reef-300 decoration-reef-200">
          Typelabs
        </span>
      </h3>
      <ul className="list-disc list-outside marker:text-reef-200 pl-4 font-work text-left text-sm desktop:text-base large:text-lg text-black space-y-2 desktop:space-y-5 large:space-y-5">
        <li>
          Your go-to agency for creating high-quality documentation for SaaS
          products.
        </li>
        <li>
          Our offerings include customer-friendly documentation and design to
          ensure seamless use of your product.
        </li>

        <li>
          We create content that meets regulations and standards specific to
          your industry.
        </li>

        <li>
          Typelabs maintains its commitment to competitive pricing without
          sacrificing quality, allowing you to receive the best value for your
          investment.
        </li>
      </ul>
    </div>
  );
};

export default Intro;
