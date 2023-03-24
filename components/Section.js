import React from "react";
import Intro from "./Intro";
import Form from "./Form";

const Section = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-white flex flex-col w-full desktop:w-3/5 my-10 mx-4 tablet:mx-12 desktop:mx-20 p-6 tablet:p-10 gap-8 rounded-2xl tablet:rounded-3xl">
                <Intro />
                <Form />
            </div>
        </div>

    );
}

export default Section;