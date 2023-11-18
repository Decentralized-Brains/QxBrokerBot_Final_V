import React from "react";
import Nav from "../global/Nav";
import Rectanlge from "../assets/image/Rectangle 2.png";

function Hero() {
  return (
<<<<<<< HEAD
    <div className="hero" id="home">
      <div className="left relative"></div>

      <div className="right">
        <Nav />
        <div className="absolute mx-2 left-[10rem] top-[6rem] md:left-[10%] md:top-[15%] flex gap-10 mt-16">
=======
    <div className="flex overflow-hidden h-[100cqb] w-full">
      {/* <div className="bg-[#20D374] w-full md:w-1/2 h-screen"></div> */}

      <div className="bg-white w-1/2 rightCustom">
        <div className="absolute mx-2 left-0 top-0 md:left-[10%] md:top-[15%] lg:left-[20rem] lg:top-[10rem] flex flex-col md:flex-row gap-10 mt-16">
>>>>>>> 3ef829272f4ca3e8bc83cc89b5158d138380e18e
          <div>
            <img
              className="w-full mt-10 border-2 border-white rounded-xl"
              src={Rectanlge}
              alt=""
            />
          </div>
<<<<<<< HEAD
          <div className="w-[50rem] flex flex-col gap-6 p-4">
=======

          <div className="w-full md:w-[50rem] flex flex-col gap-6 p-4">
>>>>>>> 3ef829272f4ca3e8bc83cc89b5158d138380e18e
            <h1 className="font-jost text-6xl font-bold">
              Quotex <span className="text-white md:text-primary-color">Bot</span>
            </h1>
            <p className="font-jost break-all text-paragraph-color text-lg">
              Lorem ipsum dolor sit amet consectetur. At posuere sed blandit
              convallis tellus tempor a augue non. Diam eget habitant vel dictum
              orci ipsum id. Aliquet porta cursus condimentum rhoncus mi
              porttitor elementum euismod. Velit nunc at consequat eu
              pellentesque risus.
            </p>
            <div>
              <h2 className="font-jost text-3xl text-white md:text-primary-color text-center md:text-left font-extrabold">$300.00</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-6 text-white md:text-black">
              <button className="bg-primary-color border-2 px-16 py-2 rounded-full">
                Try Free
              </button>
              <button className="border-2 px-16 py-2 rounded-full">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
