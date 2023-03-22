import React from "react";

const Foot = () => {
    return (
        <footer className="bg-transparent py-2 px-4 tablet:px-8 desktop:px-16 block desktop:hidden">
            <div className="mx-auto">
                <p className="text-gray-400 mona text-caption text-center">
                    © {new Date().getFullYear()} Typelabs. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Foot;