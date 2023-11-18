import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <header class="text-[#0C012D]">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav class="md:ml-auto flex flex-wrap gap-4 items-center text-xl  font-jost justify-center">
                        <a href="#home" class="mr-5 text-gray-900 no-underline">Home</a>
                        <a href="#about" class="mr-5 text-gray-900 no-underline">About</a>
                        <a href="#price" class="mr-5 text-gray-900 no-underline">Pricing</a>
                        <a href="#contact" class="mr-5 text-gray-900 no-underline">Contact</a>
                        <a href="#faq" class="mr-5 text-gray-900 no-underline">FAQ</a>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Nav;