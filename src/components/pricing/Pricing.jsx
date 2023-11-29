import React from "react";
import Avatar from "../assets/image/Avatar.png";
import Nav from "../global/Nav";

function Pricing() {
  return (
    <>
      <Nav />
      <div id="pricing" className="hero">
        <div className="flex">
          <div className="pricing-right"></div>
          <div className="pricing-left w-[100%] ">
            <div id="content-section " className="mt-8">
              <div className="flex flex-col justify-center font-jost">
                <h1 className="text-center text-primary-color">Pricing</h1>
                <p className="text-center text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                  voluptatum
                </p>
              </div>

              <div
                id="boxes"
                className="mt-8 flex max-sm:items-center max-sm:flex max-sm:flex-col gap-4"
              >
                <div className="left-box">
                  <div className="flex flex-col w-80 h-[20rem] bg-[#20d37445] p-4 rounded-lg font-jost">
                    <h1>Free</h1>
                    <p className="text-gray-500">Try it as long as you like</p>
                    <ul className="list-disc pt-2">
                      <li className="my-2 text-gray-600">
                        Feature lavel goes here
                      </li>
                      <li className="my-2 text-gray-600">
                        Feature lavel goes here
                      </li>
                      <li className="my-2 text-gray-600">
                        Feature lavel goes here
                      </li>
                    </ul>

                    <button className="bg-white hover:bg-slate-900 py-2 rounded-full text-primary-color font-jost font-semibold">
                      Sign Up For Free
                    </button>
                  </div>
                </div>
                <div className="right-box relative bg-primary-color rounded-xl p-4 h-[20rem] max-sm:h-fit">
                  <div className="flex justify-between w-[35rem] max-sm:w-80">
                    <div className="flex flex-col">
                      <h1 className="text-white leading-10">Unlimited</h1>
                      <h2 className="text-white font-normal">$49/mo</h2>

                      <ul className="list-disc ">
                        <div className="grid grid-cols-2 max-sm:grid max-sm:grid-cols-2 gap-0 text-white font-light">
                          <div>
                            <li className="mt-2 ">Feature lavel goes here</li>
                            <li className="mt-2">Feature lavel goes here</li>
                            <li className="mt-2">Feature lavel goes here</li>
                          </div>
                          <div>
                            <li className="mt-2">Feature lavel goes here</li>
                            <li className="mt-2">Feature lavel goes here</li>
                          </div>
                        </div>
                      </ul>

                      <div>
                        <button className="bg-white px-6 py-2 rounded-full text-primary-color font-jost font-semibold">
                          Sign Up For Free
                        </button>
                      </div>
                    </div>

                    <div className="avatar-section max-sm:hidden">
                      <p className="text-primary-color hover:bg-slate-500 bg-white px-4 py-2 rounded-full">
                        Recomanded
                      </p>
                      <img
                        className="w-28 max-sm:hidden absolute bottom-1 right-8"
                        src={Avatar}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
