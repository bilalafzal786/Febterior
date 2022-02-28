import React from "react";
import headImage from "../../Assets/head2.png";
import Image from "next/image";

const Index = () => {
  return (
    <>
      <div className="mx-0">
        <div className="container mx-auto relative">
          <div className="flex items-center flex-row mt-10">
            <div
              className=" bg-bggray  absolute  z-20  my-10 sm:w-[650px] 2xl:w-[1000px]  min-full mx-3
             sm:top-60 md:top-[400px] lg:top-60 2xl:top-32 top-40  sm:left-20 left-0 md:left-14 lg:left-0 flex justify-start  sm:order-1 order-2 "
            >
              <div className="div p-4 sm:p-12 2xl:p-32">
                <h1 className="text-4xl sm:text-7xl font-bold text-customWhite ">
                  We Design
                </h1>
                <h1 className="text-4xl sm:text-7xl font-bold text-customWhite ">
                  your Future
                </h1>
                <p className="text-2xl leading-9 text-customWhite font-normal my-8">
                  Vestibulum placerat scelerisque turpis, ut laoreet erat varius
                  ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper
                  lorem.{" "}
                </p>
                <button className="font-bold text-2xl px-6 py-2 bg-bggray2 text-customWhite">
                  Get IN TOUCH
                </button>
              </div>
            </div>

            <div className="flex justify-end items-center w-auto ml-auto sm:order-2 order-1 sm:my-0 ">
              <Image src={headImage} className="" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
