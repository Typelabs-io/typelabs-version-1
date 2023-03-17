import React from "react";

const Footer = () => { 
    return (
        <footer className="bg-transparent p-2">
            <div className="container mx-auto">
                <p className="text-Teal mona text-caption text-center">© {new Date().getFullYear()} Typelabs. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;