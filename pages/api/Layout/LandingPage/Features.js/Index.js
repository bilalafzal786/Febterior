import React from "react";

const Index = () => {
  const data = [
    {
      id: 1,
      heading: "Sleak",
    },
    {
      id: 2,
      heading: "Modern",
    },
    {
      id: 1,
      heading: "Elegant",
    },
  ];
  return (
    <>
      <div className="container mt-96 md:mt-44 mx-auto lg:px-10 xl:px-10 md:px-6 px-4">
        <div className="grid grid-rows-1">
          <h1 className=" text-5xl  sm:text-6xl text-center text-customBlack">
            What Happens here
          </h1>
          <p className="text-para text-2xl leading-9 sm:px-32 px-2 text-center my-8">
            Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut.
            Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem.{" "}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:grid-cols-3 gap-x-2 my-16 mx-auto">
            {data.map((item) => (
              <div
                className="col p-5 hover:shadow-xl cursor-pointer "
                key={item.id}
              >
                <h1 className="text-5xl text-customBlack my-4 sm:text-left text-center">
                  {item.heading}
                </h1>
                <p className=" text-2xl text-textPara leading-9 sm:text-left text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam
                  ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac
                  volutpat.{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
