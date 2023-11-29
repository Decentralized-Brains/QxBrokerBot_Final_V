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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
                molestiae assumenda nisi, omnis ut pariatur debitis at esse et
                in!
              </p>
            </div>

            <div className="bg-white shadow-xl w-[600px] max-sm:w-fit rounded-lg relative left-[100%] h-fit p-6 max-sm:p-4 max-sm:left-0">
              <h1 className="font-semibold">
                Why choose Quotex {" "}
                <span className="text-primary-color ">Bot?</span>
              </h1>
              <ol className="text-[#666666] list-disc text-sm">
                <li className="my-2 text-md">Your One Stop Bot Trading Management Platform</li>
                <li className="my-2 text-md">Your One Stop Bot Trading Management Platform</li> 
                <li className="my-2 text-md">Your One Stop Bot Trading Management Platform</li> 
                <li className="my-2 text-md">Your One Stop Bot Trading Management Platform</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="abt ">
            <Nav />
        </div>
      </div>
    </div>
  );
}

export default About;
