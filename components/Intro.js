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
      <ul className="list-disc list-outside marker:text-reef-200 pl-4 font-work text-justify text-sm desktop:text-base large:text-lg text-black space-y-2 desktop:space-y-5 large:space-y-5">
        <li>
          Your go-to agency for creating high-quality documentation for your
          software products.
        </li>
        <li>
          User manuals and online help systems that help your audience use your
          product seamlessly.
        </li>
        <li>
          User-friendly interfaces that makes products visually appealing and
          easy to navigate.
        </li>
        <li>
          Articles that provide valuable insights into technical topics and
          trends.
        </li>
        <li>
          Custom email design that enhances the effectiveness of your email
          marketing campaigns.
        </li>
        <li>
          Competitive pricing, without compromising on quality, so you get the
          most value for your investment.
        </li>
      </ul>
    </div>
  );
};

export default Intro;
