import React from "react";

function About() {
  return (
    <div id="about">
      <div className="hero">
        <div className="left relative">

          <div className="flex flex-col gap-6 absolute top-10 mx-12 my-4">
            
            <div className="bg-white shadow-xl h-fit w-fit p-4 rounded-lg font-jost">
              <p className="w-[15rem] font-jost">
                Your One Stop Bot Trading Management Platform
              </p>
              <h1>
                What is Quotex{" "}
                <span className="text-primary-color  ">Bot?</span>
              </h1>
              <p className="text-sm text-[#666666]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
                molestiae assumenda nisi, omnis ut pariatur debitis at esse et
                in!
              </p>
            </div>

            <div className="bg-white shadow-xl w-[600px] rounded-lg relative left-[100%]  h-fit p-6 ">
              <h1 className="font-semibold">
                Why choose Quotex {" "}
                <span className="text-primary-color ">Bot?</span>
              </h1>
              <ol className="text-[#666666] text-sm">
                <li className="my-2">Your One Stop Bot Trading Management Platform</li>
                <li className="my-2">Your One Stop Bot Trading Management Platform</li>
                <li className="my-2">Your One Stop Bot Trading Management Platform</li>
                <li className="my-2">Your One Stop Bot Trading Management Platform</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="abt">

        </div>
      </div>
    </div>
  );
}

export default About;
