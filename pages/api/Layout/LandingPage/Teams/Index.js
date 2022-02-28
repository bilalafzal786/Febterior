import React from "react";
import team1 from "../../Assets/team1.svg";
import team2 from "../../Assets/team2.svg";
import team3 from "../../Assets/team3.svg";
import Image from "next/image";

const Index = () => {
  const data = [
    {
      id: 1,
      img: team1,
      heading: "Josepy Sand",
      description: "sand.j@gmail.com",
    },
    {
      id: 2,
      img: team2,
      heading: "Alex Bryan",
      description: "baryan.a@gmail.com",
    },
    {
      id: 1,
      img: team3,
      heading: "Jessica Stan",
      description: "stan.j@gmail.com",
    },
  ];
  return (
    <>
      <div className="div  lg:px-10 xl:px-10 md:px-6 px-4 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <h1 className="text-6xl text-center text-customBlack">
              Our Talented Team
            </h1>
            <p className="text-para text-2xl leading-9 sm:px-44 px-2 text-center my-8">
              Dive into our projects from small businesses to Enterprise
              solutions. Record of delivering
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 m-8 items-center">
            {data.map((item) => (
              <div
                className="col flex flex-col items-center my-8"
                key={item.id}
              >
                <Image src={item.img} alt="" />
                <h1 className="font-bold text-4xl text-teamText text-center">
                  {item.heading}
                </h1>
                <p className="text-textPara text-2xl text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid justify-center my-24">
            <button className="font-bold text-2xl px-6 py-2 bg-bggray2 text-customWhite w-[14.125rem]">
              View all
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
