import React from "react";
import Image from "next/image";
import img1 from "../../Assets/about1.svg";
import img2 from "../../Assets/about2.svg";
import img3 from "../../Assets/about3.svg";

const Index = () => {
  return (
    <>
      <div className="div lg:px-10 xl:px-10 md:px-6 px-4 ">
        <div className="container mx-auto ">
          <div className=" my-24 lg:justify-center flex gap-x-4">
            <div className=" lg:flex justify-center flex-col gap-x-8 w-full md:w-full sm:w-2/4">
              <img src="/about1.png" alt="img1" className=" w-auto" />
              <div className="div flex flex-col col px-8 py-6 border border-gray-900  mt-2 ">
                <p className="text-4xl text-customBlack">About us</p>
                <p className="text-textPara text-2xl leading-9 my-3 ">
                  Vestibulum placerat scelerisque turpis, ut laoreet erat varius
                  ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper
                  lorem.{" "}
                </p>
                <a
                  href="#"
                  className="font-bold text-xl underline text-teamText"
                >
                  Know More
                </a>
              </div>
            </div>
            <div className=" lg:flex justify-center sm:flex flex-col relative gap-y-2 hidden md:hidden flex-grow">
              <img
                src="/about2.svg"
                alt="img1"
                className="h-full object-cover"
              />

              <img
                src="/about3.svg"
                alt="img1"
                className="h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
// <>
//   <div className="container mx-auto">
//     <div className="lg:px-10 xl:px-10 2xl:px-10 md:px-6 px-4">
//       <div className="lg:flex lg:justify-center items-center lg:flex-row md:flex md:flex-col gap-x-8">
//         <div className="lg:w-auto md:w-auto lg:mb-0  mb-4 ml-2  border border-gray-900 px-8 py-6 lg:-mt-4 lg:hidden block md:mb-8">
//           <h1 className="text-4xl  text-gray-900 capitalize text-left mb-4 ">
//             About Us
//           </h1>
//           <p className="text-xl text-left text-gray-600 mb-8">
//             Vestibulum placerat scelerisque turpis, ut laoreet erat varius
//             ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper
//             lorem.
//           </p>
//           <a
//             href=""
//             className="text-2xl font-bold leading-normal underline text-gray-700"
//           >
//             Know More{" "}
//           </a>
//         </div>
//         <img className="object-cover pb-8 lg:mt-24 " src="/about1.png" />
//         <img className="object-cover pb-8 " src="/about2.png" />
//       </div>

//       <div className=" lg:justify-center items-center lg:flex lg:flex-row md:flex md:flex-col gap-x-8">
//         <div className="w-[445px] ml-2  border border-gray-900 px-8 py-6 lg:-mt-4 lg:block hidden">
//           <h1 className="text-4xl  text-gray-900 capitalize text-left mb-4 ">
//             About Us
//           </h1>
//           <p className="text-xl text-left text-gray-600 mb-8">
//             Vestibulum placerat scelerisque turpis, ut laoreet erat varius
//             ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper
//             lorem.
//           </p>
//           <a
//             href=""
//             className="text-2xl font-bold leading-normal underline text-gray-700"
//           >
//             Know More{" "}
//           </a>
//         </div>
//         <div className="">
//           <img
//             className="object-cover pb-8 lg:-mt-28 lg:pl-4"
//             src="/about3.png"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// </>
// <>
//
