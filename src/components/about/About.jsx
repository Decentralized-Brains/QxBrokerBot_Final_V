import React from "react";
import Nav from "../global/Nav";

function About() {
  return (
    <div id="about" className="">
      <div className="hero">
        
        <div className="left relative ">
          <div className="flex flex-col gap-6 max-sm:gap-12 max-sm:justify-center absolute top-10 mx-12 my-4 max-sm:top-0 max-sm:mx-4 max-sm:py-24">
            
            <div className="bg-white shadow-xl h-fit w-fit p-4 rounded-lg font-jost">
              <p className="w-[15rem] max-sm:w-[20rem] font-jost">
                Your One Stop Bot Trading Management Platform
              </p>
              <h1>
                What is Quotex{" "}
                <span className="text-primary-color  ">Bot?</span>
              </h1>
              <p className="text-md text-[#666666]">
              Quotex Auto Trade Bot is a tool on the Quotex platform that automatically executes trades based on preset strategies, removing the need for manual trading.
              </p>
            </div>

            <div className="bg-white shadow-xl w-[600px] max-sm:w-fit rounded-lg relative left-[100%] h-fit p-6 max-sm:p-4 max-sm:left-0">
              <h1 className="font-semibold">
                Why choose Quotex {" "}
                <span className="text-primary-color ">Bot?</span>
              </h1>
              <ol className="text-[#666666] list-disc text-sm">
                <li className="my-2 text-md">Executing strategies automatically without constant oversight.</li>
                <li className="my-2 text-md">Rapidly executes trades based on predefined algorithms</li> 
                <li className="my-2 text-md">Allows trading when the user is not actively monitoring the markets</li> 
                <li className="my-2 text-md">Removes emotional decision-making, sticking to set strategies consistently.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="abt">
            <Nav />
        </div>
      </div>
    </div>
  );
}

export default About;
