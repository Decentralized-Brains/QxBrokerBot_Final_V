import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="text-[#0C012D]">
            <div className="container mt-10 mx-auto flex flex-wrap flex-col md:flex-row items-center">
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
                        isMenuOpen ? "flex max-sm:gap-4 md:hidden" : "hidden md:flex"
                    }  md:flex md:ml-auto mt-4 md:mt-0 gap-6 items-center text-xl font-jost justify-center`}
                >
                    <a href="#home" className="text-gray-900 no-underline">
                        Home
                    </a>
                    <a href="#about" className="text-gray-900 no-underline">
                        About
                    </a>
                    <a href="#price" className="text-gray-900 no-underline">
                        Pricing
                    </a>
                    <a href="#contact" className="text-gray-900 no-underline">
                        Contact
                    </a>
                    <a href="#faq" className="text-gray-900 no-underline">
                        FAQ
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Nav;
