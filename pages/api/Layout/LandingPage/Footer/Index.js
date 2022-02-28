import React from "react";

const Index = () => {
  return (
    <>
      <div className="bg-teamText  mt-[450px] sm:mt-0">
        <div className="container mx-auto lg:px-10 xl:px-10 md:px-6 px-4">
          <div className="grid grid-cols-12 pt-20 pb-5">
            <div className="md:col-span-12 col-span-12 sm:col-span-3 lg:col-span-2  text-left md:text-center lg:text-left">
              <p className="text-[2rem] text-customWhite mb-8 sm:my-0">
                Fabterior
              </p>
            </div>
            <div className="md:col-span-12 col-span-12 lg:col-span-7 sm:col-span-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4">
                <div className="col">
                  <p className="text-xl text-customWhite">Top Products</p>
                  <p className="font-light text-base text-customWhite mt-4">
                    Chairs
                  </p>
                  <p className="font-light text-base text-customWhite my-2">
                    Tables
                  </p>
                  <p className="font-light text-base text-customWhite my-2">
                    Vase
                  </p>
                  <p className="font-light text-base text-customWhite my-2">
                    Plants
                  </p>
                </div>
                <div className="col">
                  <p className="text-xl text-customWhite">Services</p>
                  <p className="font-light text-base text-customWhite mt-4">
                    Chairs
                  </p>
                  <p className="font-light text-base text-customWhite my-2">
                    Tables
                  </p>
                </div>
                <div className="col">
                  <p className="text-xl text-customWhite">Projects</p>
                  <p className="font-light text-base text-customWhite mt-4">
                    Chairs
                  </p>
                  <p className="font-light text-base text-customWhite my-2">
                    Tables
                  </p>
                  <p className="font-light text-base text-customWhite my-2">
                    Vase
                  </p>
                </div>
                <div className="col">
                  <p className="text-xl text-customWhite">Exhibitions</p>
                  <p className="font-light text-base text-customWhite mt-4">
                    Chairs
                  </p>
                  <p className="font-light text-base text-customWhite my-2">
                    Tables
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-12 col-span-12 sm:col-span-3 lg:col-span-3">
              <p className="text-[2.5rem] text-customWhite">Newsletter</p>
              <div className="flex ">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="bg-transparent border border-customWhite placeholder-customWhite p-2"
                />
                <span className="p-3 bg-white ">
                  <svg
                    width="26"
                    height="16"
                    viewBox="0 0 26 16"
                    className=""
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.785156 7.85693H24.7852"
                      stroke="#334048"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.9282 14.7141L24.7854 7.85693"
                      stroke="#334048"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.9282 1L24.7854 7.85714"
                      stroke="#334048"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <hr className="w-full h-1 bg-customWhite2" />
          <p className="text-customWhite  text-base py-6">
            Copyright @2020 All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
