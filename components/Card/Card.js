import React from "react";

function Card({ icon, title, description }) {
  return (
    <div className="">
      <div className="">
        <div className="">{icon}</div>
        <div className="">{title}</div>
        <div className="">{description}</div>
      </div>
    </div>
  );
}

export default Card;
