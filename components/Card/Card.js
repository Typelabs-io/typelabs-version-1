import React from "react";

function Card({ icon, title, description }) {
  return (
      <div className="bg-gray-50 flex flex-col justify-center items-center py-4 px-2 w-3/4">
        <div className="mb-2">{icon}</div>
        <div className="mona uppercase text-caption font-bold text-black mb-4">{title}</div>
        <div className="mona text-caption text-gray-400 text-center">{description}</div>
      </div>
  );
}

export default Card;
