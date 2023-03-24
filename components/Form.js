import React from "react";

const Form = () => {
    return (
        <div className="bg-reef-100 flex flex-col justify-center items-center p-1 rounded-xl tablet:rounded-2xl">
            <div className="bg-white flex flex-col justify-center items-center p-4 tablet:p-6 gap-4 tablet:gap-6 rounded-lg tablet:rounded-xl border border-solid border-reef-200">
                <p className="font-work text-justify text-sm desktop:text-base ">
                    We are currently in the process of building our agency, and are
                    excited to launch soon. If you are interested in our services and
                    would like to be notified when we launch, sign up for our waitlist
                    below and get a{" "}
                    <span className="font-medium text-reef-200 uppercase">
                        free quote
                    </span>
                    .
                </p>
                <form className="w-full font-work text-sm desktop:text-base flex flex-col">
                    <input
                        type="text"
                        placeholder="Your name"
                        className="mb-1 tablet:mb-2 px-4 tablet:px-6 py-2 tablet:py-3 border border-solid border-gray-200 w-full rounded"
                    />
                    <input
                        type="email"
                        placeholder="Your email"
                        className="mb-4 tablet:mb-6 px-4 tablet:px-6 py-2 tablet:py-3 border border-solid border-gray-200 w-full rounded"
                    />
                    <button className="uppercase text-white font-medium rounded px-4 tablet:px-6 py-2 tablet:py-3 bg-reef-200 border border-solid border-reef-300">
                        Give me the quote
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
