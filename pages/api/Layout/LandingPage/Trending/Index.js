import React, { useEffect, useState } from "react";
import Image from "next/image";
import trending1 from "../../Assets/trending1.svg";
import trending2 from "../../Assets/trending2.svg";
import trending3 from "../../Assets/trending3.svg";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
const Index = () => {
  const data = [
    {
      id: 0,
      img: trending1,
      heading: "Study lamp",
    },
    {
      id: 1,
      img: trending2,
      heading: "Flower Vase",
    },
    {
      id: 2,
      img: trending3,
      heading: "Stylish Chair",
    },
    {
      id: 3,
      img: trending3,
      heading: "Stylish Chair",
    },
    {
      id: 4,
      img: trending3,
      heading: "Stylish Chair",
    },
  ];
  const [width, setWidth] = useState();
  const [width2, setWidth2] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    var w = window.innerWidth;

    if (w < 786 && w > 350) {
      setWidth(1);
      setWidth2(100);
      setHeight(125);
    } else if (w < 850 && w > 760) {
      setWidth(2);
    } else {
      setWidth(100);
      setWidth(3);
      setHeight(180);
    }
  });

  return (
    <>
      <div className="container mx-auto mt-20 lg:px-10 xl:px-10 md:px-6 px-4">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 lg:col-span-4 md:col-span-12 sm:col-span-4  flex justify-center flex-col mx-auto">
            <div className="div">
              <h1 className="text-6xl text-customBlack sm:text-left text-center my-8 sm:my-0 md:my-16 2xl:px-10 2xl:leading-[80px] ">
                Trending Products
              </h1>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-8 lg:col-span-8 md:col-span-12 ">
            <svg
              className="w-4/5 h-3/5 ml-auto -mb-24 sm:-mb-44"
              height="250"
              viewBox="0 0 485 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="610" height="250" fill="#334048" />
            </svg>
            <div className="grid grid-rows-1 gap-x-6 w-full h-full z-20">
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={height}
                totalSlides={5}
                visibleSlides={width}
                orientation={"horizontal"}
                isPlaying={"true"}
              >
                <Slider>
                  {data.map((item) => (
                    <Slide index={item.id} className="">
                      <div
                        className="col flex flex-col justify-center mx-2"
                        key={item.id}
                      >
                        <Image src={item.img} alt="img" />
                        <p className="text-lg sm:text-4xl font-medium text-customBlack text-center mt-4">
                          {item.heading}
                        </p>
                        <p className="text-textPara text-2xl sm:text-4xl text-center my-3">
                          $45
                        </p>
                      </div>
                    </Slide>
                  ))}
                </Slider>
                <div className="div flex flex-row justify-center mx-auto my-8">
                  <ButtonBack className="p-4 border mt-0 2xl:mt-2">
                    <svg
                      width="34"
                      height="20"
                      viewBox="0 0 34 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.333 10.0482H0.666339"
                        stroke="#334048"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 19.2973L0.666671 9.96399"
                        stroke="#334048"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 0.630615L0.666671 9.96395"
                        stroke="#334048"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                  <ButtonNext className="p-4 border ml-4 mt-0 2xl:mt-2">
                    <svg
                      width="34"
                      height="20"
                      viewBox="0 0 34 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.666504 9.96399H33.3332"
                        stroke="#334048"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24 19.2973L33.3333 9.96399"
                        stroke="#334048"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24 0.630615L33.3333 9.96395"
                        stroke="#334048"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </CarouselProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
