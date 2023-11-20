import React from "react";

const Footer = () => {

    return (
        <>
        <div id="footer">
            <div className="bg-primary-color w-[100%] py-2 flex justify-center  items-center text-white">
                <p className="font-jost font-semibold">&copy; {new Date().getFullYear()} DecentralizedBrains. All Rights Reserved.</p>

            </div>
        </div>
        </>
    )
}
export default Footer;