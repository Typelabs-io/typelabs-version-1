import React from "react";
import Bullet from "./Bullet/Bullet";
import Card from "./Card/Card";
import cardDetails from "./Card/cardDetails";
import Footer from "@/components/Footer";
import bulletDetails from "./Bullet/bulletDetails";

const Left = () => {
  return (
    <div className="w-auto desktop:w-1/2 bg-white border-b desktop:shadow-right pl-4 tablet:pl-8 desktop:pl-20">
      <div className="mt-4 tablet:mt-8 desktop:mt-28 desktop:mb-20">
        <h3 className="font-lora font-medium text-3xl large:text-5xl italic text-black mb-4">
          Welcome to Typelabs
        </h3>
        <p className="mona text-sm large:text-lg text-black mb-10 w-4/5">
          We are a technical writing and design agency that helps businesses and
          individuals create high-quality technical documentation and design
          assets. From user manuals and training guides to web design and web
          development, we have the expertise and experience to meet your needs.
        </p>

        <h3 className="font-lora font-medium text-3xl large:text-5xl italic text-black mb-4">
          What we do
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
