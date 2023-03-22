import React from "react";
import Left from "./Left";
import Right from "./Right";


const Mid = () => { 
    return (
        <div className="h-auto desktop:h-screen flex flex-col desktop:flex-row relative">
            <Left />
            <Right />
        </div>
    )
}

export default Mid;