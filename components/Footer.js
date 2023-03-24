import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent py-2 px-4 tablet:px-8 desktop:px-20 w-full">
      <div className="mx-auto">
        <p className="text-gray-400 font-work text-caption text-center">
          © {new Date().getFullYear()} Typelabs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
