import React from "react";
import Bullet from "./Bullet/Bullet";
import Card from "./Card/Card";
import cardDetails from "./Card/cardDetails";
import Footer from "@/components/Footer";
import bulletDetails from "./Bullet/bulletDetails";
import { TbPointFilled } from "react-icons/tb";

const Left = () => {
  return (
    <div className="w-auto desktop:w-1/2 bg-white border-b desktop:shadow-right pl-4 tablet:pl-8 desktop:pl-20">
      <div className="mt-4 tablet:mt-8 desktop:mt-28 desktop:mb-20">
        <h3 className="font-lora font-medium text-3xl large:text-5xl italic text-black mb-4">
          Welcome to Typelabs
        </h3>
        <ul className="list-disc list-inside pl-4 mona text-sm large:text-lg text-black mb-10 w-4/5 space-y-3">
          <li className=" ">
            {" "}
            Your go-to agency for creating high-quality documentation for your
            software products.{" "}
          </li>
          <li>
            {" "}
            User manuals and online help systems that help your audience use
            your product seamlessly.
          </li>
          <li>
            {" "}
            User-friendly interfaces that makes products visually appealing and
            easy to navigate.{" "}
          </li>{" "}
          <li>
            Articles that provide valuable insights into technical topics and
            trends.
          </li>
          <li>
            {" "}
            Custom email design that enhances the effectiveness of your email
            marketing campaigns.{" "}
          </li>
          <li>
            Competitive pricing, without compromising on quality, so you get the
            most value for your investment.
          </li>
        </ul>

        <h3 className="font-lora font-medium text-3xl large:text-5xl italic text-black mb-4">
          Solutions we offer
        </h3>
        {/* Bullet */}
        <div className="flex flex-wrap w-4/5 gap-2 mb-10">
          {bulletDetails.map((bullet, index) => (
            <Bullet key={index} text={bullet.text} />
          ))}
        </div>

        <h3 className="font-lora font-medium text-3xl large:text-5xl italic text-black mb-4">
          Choose Typelabs
        </h3>
        {/* Card */}
        <div className="flex flex-row items-start gap-2">
          {cardDetails.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Left;
