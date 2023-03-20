import React from "react";
import Card from "./Card";
import cardDetails from "./cardDetails";

const LeftSide = () => {
  return (
    <div className="h-screen flex items-center">
      <div>
        {/* Welcome to Typelabs */}
        <div>
          <h1 className="font-lora text-2xl italic mb-3">
            {" "}
            Welcome to Typelabs
          </h1>
          <p className="mona tracking-wider leading-loose">
            {" "}
            We are an agency that create user specific technical documentation
            and design assets. From user manuals and training guides to web
            design and web development , we have the expertise and experience to
            meet your needs{" "}
          </p>
        </div>
        {/* What we do */}
        <div>
          <h1 className="font-lora text-2xl italic mb-3"> What we do</h1>
          <p className="mona tracking-wider leading-loose"></p>
        </div>
        {/* Cards */}
        <div>
          <h1 className="font-lora text-2xl italic mb-1"> Choose Typelabs</h1>
          <div className="flex">
            {" "}
            {cardDetails.map((detail) => (
              <Card
                key={detail.id}
                title={detail.title}
                description={detail.description}
                icon={detail.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
