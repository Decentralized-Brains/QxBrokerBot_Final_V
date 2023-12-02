import React from "react";
import Nav from "../global/Nav";
import Rectanlge from "../assets/image/Rectangle 2.png";

function Hero() {
  return (
    <div className="hero h-fit " id="home">
      <div className="max-sm:hidden left"></div>

      <div className="right">
        <Nav />
        <div className="flex overflow-hidden ">
          <div className="">
            <div className="absolute mx-2 left-[10rem] max-sm:left-0 md:left-[10%] md:top-[15%] flex gap-10 mt-12">
              <div>
                <img
                  className="max-sm:hidden w-full mt-10 border-2 border-white rounded-xl"
                  src={Rectanlge}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 p-4 ">
                <div className="w-full md:w-[40rem] max-sm:w-[20rem] max-sm:absolute max-sm:left-0 flex flex-col gap-2 p-4">
                  <h1 className="font-jost text-6xl font-bold">
                    Quotex <span className="text-primary-color">Bot</span>
                  </h1>
                  <p className="font-jost break-all text-gray-600 text-lg">
                  Introducing the Binary Trading Bot for Quotex—a cutting-edge tool that automates order placements, optimizing your strategies with swift and precise trades. Powered by sophisticated algorithms, it offers convenience and efficiency, analyzing market trends to execute orders seamlessly. Empowering traders with its automated approach, this bot ensures a responsive and seamless trading experience on the Quotex platform.
                  </p>
                  <div>
                    <h2 className="font-jost text-3xl text-primary-color font-extrabold">
                      $300.00
                    </h2>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 text-white md:text-black">
                    <button className="bg-primary-color border-2 px-16 py-2 font-bold rounded-full">
                      Try Free
                    </button>
                    <button className="border-2  px-16 py-2 text-primary-color max-sm:text-primary-color font-bold rounded-full">
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
