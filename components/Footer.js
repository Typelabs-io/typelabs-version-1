import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent py-2 px-4 tablet:px-8 desktop:px-16 z-10 desktop:w-1/2 absolute inset-x-0 bottom-0">
      <div className="mx-auto">
        <p className="text-gray-400 mona text-caption text-center">
          © {new Date().getFullYear()} Typelabs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
