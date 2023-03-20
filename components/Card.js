import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4  rounded-lg p-6">
      <div className=" rounded-full p-4">{icon}</div>
      <h2 className="uppercase font-medium text-md tracking-wide text-center">
        {title}
      </h2>
      <p className=" text-base text-cardText text-center mona">{description}</p>
    </div>
  );
};

export default Card;
