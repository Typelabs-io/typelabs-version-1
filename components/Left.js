import React from "react";

const Left = () => {
    return (
        <div className="w-auto desktop:w-1/2 bg-white border-b desktop:shadow-right pl-4 tablet:pl-8 desktop:pl-20">
            <div className="mt-4 tablet:mt-8 desktop:mt-32">
                <h3 className="font-lora font-medium text-3xl large:text-5xl italic text-black mb-4">Welcome to Typelabs</h3>
                <p className="mona text-sm large:text-lg text-black mb-10 w-4/5">We are a technical writing and design agency that helps
                    businesses and individuals create high-quality technical
                    documentation and design assets. From user manuals and
                    training guides to web design and web development, we have the
                    expertise and experience to meet your needs.
                </p>
                <h3 className="font-lora font-medium text-3xl large:text-5xl italic text-black mb-4">What we do</h3>
                <h3 className="font-lora font-medium text-3xl large:text-5xl italic text-black mb-4">Choose Typelabs</h3>
           </div>
        </div>
    )
};


export default Left;