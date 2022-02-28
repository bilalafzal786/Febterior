import React from "react";
import Img from "../../Assets/exhibition.svg";
import Image from "next/image";
const Index = () => {
  return (
    <>
      <div className="mx-0">
        <div className="container mx-auto my-44 relative">
          <div className="grid grid-cols-1">
            <h1 className="text-6xl text-center text-customBlack my-44 sm:my-32">
              Upcoming Exhibitions
            </h1>
          </div>

          <div className="flex items-center flex-row ">
            <div className=" flex justify-start items-center w-full ml-auto sm:order-2 order-1 sm:my-0 flex-auto">
              <Image src={Img} className=" " alt="img" />
            </div>
            <div className=" bg-bggray absolute right-0 md:right-14 2xl:right-[0rem] lg:right-0 sm:w-[650px] 2xl:w-[1000px] mt-[600px] lg:mt-0 md:mt-96 w-full z-50 my-10 md:flex md:justify-center justify-center flex flex-auto  ">
              <div className="div p-4 sm:p-12 2xl:p-20 ">
                <h1 className="text-4xl font-normal text-customWhite ">
                  We Design
                </h1>
                <div className="div flex my-2">
                  <span className="text-miniPara text-lg">Nov 01 - 10</span>
                  <span className="text-miniPara text-lg">James Haul</span>
                </div>

                <p className="text-2xl leading-9 text-customWhite font-normal my-8">
                  Vestibulum placerat scelerisque turpis, ut laoreet erat varius
                  ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper
                  lorem.{" "}
                </p>
                <a
                  href="#"
                  className="font-bold text-2xl  underline text-customWhite"
                >
                  Read More
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
