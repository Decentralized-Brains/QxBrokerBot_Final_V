import React from "react";

function Contact() {
  return (
    <div id="contact" className="my-16">
      <div className="">
        <div className="flex flex-col text-center mt-12">
          <h1 className="font-jost font-semibold">
            Contact <span className="text-primary-color">Us</span>
          </h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            vero!
          </p>
        </div>
        
        <div className="w-[60%] max-sm:w-[100%]  h-fit flex gap-8 shadow-2xl rounded-xl mx-auto ">
          <div className="left-div max-sm:hidden overflow-hidden relative w-[30%] max-h-max bg-primary-color rounded-xl p-4">
            <h5 className="text-white font-semibold">Contact Information</h5>
            <p className="text-white">contact@gmail.com</p>
            <span>icon</span>  <span>icon</span>
            <div class="w-36 h-36 bg-[#F5F5F5] opacity-30 rounded-full absolute  -bottom-12 -right-10"></div>
            <div class="w-20 h-20 bg-[#F5F5F5] opacity-20 rounded-full absolute  bottom-8 right-10"></div>
          </div>


          <div className="right-div ">
            <div className="form-section p-2">
              <div className="grid grid-cols-2 gap-6 max-sm:grid max-sm:grid-cols-1">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-500 font-jost">
                    First Name
                  </label>
                  <input type="text" className="border-b-2" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-500 font-jost">
                    Last Name
                  </label>
                  <input type="text" className="border-b-2" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-500 font-jost">
                    Email
                  </label>
                  <input type="text" className="border-b-2" />
                </div>
              </div>

              <div className="mt-6">
                <h5 className="text-gray-800 font-jost">Select Subject ?</h5>

                <div className="flex gap-2">
                  <div>
                    <input type="radio" name="select" />
                    <label htmlFor="" className="px-2">
                      General Enquiry
                    </label>
                  </div>
                  <div>
                    <input type="radio" name="select" />
                    <label htmlFor="" className="px-2">
                      General Enquiry
                    </label>
                  </div>
                  <div>
                    <input type="radio" name="select" />
                    <label htmlFor="" className="px-2">
                      General Enquiry
                    </label>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col mt-6">
                    <label htmlFor="message" className="text-gray-500 my-2">Message</label>
                    <textarea className="border" name="message" id="" cols="40" rows="2" />
                    <div className="flex justify-end my-2">
                      <button className="bg-primary-color px-4 py-2 rounded-lg text-white">Send Message</button>
                    </div>
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

export default Contact;
