import React from "react";

function Bullet({ text }) {
  return (
      <div className="bg-wave-100 mona text-caption rounded text-wave-300 px-4 py-2 flex flex-row justify-center items-center">
        <p>{text}</p>
      </div>
  );
}

export default Bullet;
