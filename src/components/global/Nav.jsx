import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    // absolute right-4 top-0 z-10
    return (
        <header className="text-[#0C012D] ">
            <div className="container mt-10 right-4 relative z-0 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="flex justify-end items-center w-full">
                    {/* <Link to="/" className="text-gray-900 no-underline">
                        Your Logo
                    </Link> */}
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <nav
                    className={`${
                        isMenuOpen ? "mb-20 top-2 bg-primary-color p-6 absolute z-10 -right-4 w-full  flex max-sm:gap-4 md:hidden" : "hidden md:flex"
                    }  md:flex md:ml-auto mt-4 md:mt-0 gap-6 items-center text-xl font-jost justify-center`}
                >
                    <Link to={"/"} className="no-underline text-gray-900 max-sm:text-white">
                        Home
                    </Link>

                    <Link to={"/about"} className="no-underline text-gray-900 max-sm:text-white">
                    About
                    </Link>

                    <Link to={"/pricing"} className="no-underline text-gray-900 max-sm:text-white">
                        Pricing
                    </Link>

                    <Link to={'/contact'} className="no-underline text-gray-900 max-sm:text-white">
                        Contact
                    </Link>

                    <Link to={"/faq"} className="no-underline text-gray-900 max-sm:text-white">
                    FAQ
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Nav;
