import React from "react";
import Nav from "../global/Nav";
import Rectanlge from "../assets/image/Rectangle 2.png";

function Hero() {
  return (
    <div className="hero" id="home">
      <div className="left relative"></div>

      <div className="right">
        <Nav />
        <div className="absolute mx-2 left-[10rem] top-[6rem] md:left-[10%] md:top-[15%] flex gap-10 mt-16"></div>
        <div className="flex overflow-hidden h-[100vh] w-full">
 
          <div className="">
            <div className="absolute mx-2 left-[10rem] top-[8rem] md:left-[10%] md:top-[15%] flex gap-10 mt-16">
              <div>
                <img
                  className="w-full mt-10 border-2 border-white rounded-x"
                  src={Rectanlge}
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-6 p-4">
                <div className="w-full md:w-[40rem] flex flex-col gap-6 p-4">
                  <h1 className="font-jost text-6xl font-bold">
                    Quotex{" "}
                    <span className="text-primary-color">
                      Bot
                    </span>
                  </h1>
                  <p className="font-jost break-all text-paragraph-color text-lg">
                    Lorem ipsum dolor sit amet consectetur. At posuere sed
                    blandit convallis tellus tempor a augue non. Diam eget
                    habitant vel dictum orci ipsum id. Aliquet porta cursus
                    condimentum rhoncus mi porttitor elementum euismod. Velit
                    nunc at consequat eu pellentesque risus.
                  </p>
                  <div>
                    <h2 className="font-jost text-3xl text-primary-color font-extrabold">
                      $300.00
                    </h2>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 text-white md:text-black">
                    <button className="bg-primary-color border-2 px-16 py-2 rounded-full">
                      Try Free
                    </button>
                    <button className="border-2 px-16 py-2 text-primary-color font-bold rounded-full">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
