import React from "react";

const Index = () => {
  return (
    <>
      <div className="container  mt-32 mx-auto lg:px-10 xl:px-10 md:px-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 my-24">
          <div className="col-span-12 sm:col-span-4 lg:col-span-4  md:col-span-12 sm:mx-auto mx-0 relative my-auto">
            <svg
              width="400"
              height="470"
              className="absolute top-0 right-0 sm:top-0 sm:right-0"
              viewBox="0 0 403 527"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="-1.61167"
                y="1.37931"
                width="310"
                height="437"
                transform="matrix(-0.996996 -0.077453 -0.077453 0.996996 399.607 28.1858)"
                stroke="#334048"
                stroke-width="3"
              />
            </svg>

            <img
              src="/top.png"
              alt=""
              className="relative p-5 sm:p-4 top-0 left-5 sm:-left-4 w-[320px] sm:w-[350px] md:w-[315px]"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="col-span-12 sm:col-span-8 lg:col-span-8 md:col-span-12">
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-4 lg:col-span-4 flex justify-end  md:invisible lg:visible pr-5">
                <hr className="h-1 bg-black w-24 sm:block hidden" />
              </div>
              <div className="col-span-12 my-8 lg:col-span-8 md:col-span-12 md:my-12">
                <h1 className="text-5xl  text-customBlack">
                  Modern Interior for Luxury Look and Feel
                </h1>
                <p className=" text-textPara text-2xl leading-9  text-justify my-8">
                  Vestibulum placerat scelerisque turpis, ut laoreet erat varius
                  ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper
                  lorem. Nullam sodales lorem libero, ut viverra diam suscipit
                  et. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra damos
                </p>
                <a className="text-2xl text-customBlack underline cursor-pointer font-bold">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
