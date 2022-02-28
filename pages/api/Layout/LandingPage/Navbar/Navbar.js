import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Services",
    },
    {
      id: 4,
      link: "Collections",
    },
  ];

  // const menu = document.getElementById("menu");
  // const ulMenu = document.getElementById("ulMenu");

  // function menuToggle() {
  //   menu.classList.toggle("h-32");
  // }
  return (
    <>
      <nav className="py-5 z-100">
        <div className="container flex items-center mx-auto sm:relative absolute overflow-hidden">
          <div className="div">
            <a className="flex" href="#" className="flex ml-5 md:ml-3 lg:ml-0">
              <span className="text-blueCustom text-2xl font-bold ml-2 dark:text-white">
                Fabterior
              </span>
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            // data-collapse-toggle="mobile-menu"
            type="button"
            class="inline-flex items-center p-2 ml-3 mr-4 sm:mr-0 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
            // aria-controls="mobile-menu-2"
            // aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class={`w-6 h-6 ${
                open ? "hidden" : ""
              } transition-all duration-900`}
              // `
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class={` w-6 h-6 ${
                open ? "" : "hidden"
              } transition-all duration-900`}
              //
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            id="navLinks"
            class={`my-5 transition ease-out duration-500 sm:transition-transform-none  grow md:flex md:items-center w-full  sm:bg-transparent bg-reviewColor z-40 pl-auto${
              !open ? "hidden sm:flex " : ""
            } flex  md:w-auto `}
          >
            {/* bg-gradient-to-b from-cyan-100 to-cyan-50 sm:bg-gradient-to-b
            sm:from-[rgba(0,0,0,0)] sm:to-[rgba[0,0,0,0]] */}
            <ul
              class={`scroll-smooth flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium  md:text-center mx-auto sm:py-0 py-4`}
            >
              {links.map((items) => (
                <li key={items.id}>
                  <a
                    key={items.id}
                    // onClick={() => {
                    //   setClicked2(false);
                    //   setClicked3(false);

                    //   setClicked4(false);
                    //   setClicked(true);
                    // }}
                    href="#"
                    class={`active:border-2 block transition py-2 pr-4 pl-3 text-gray-700  border-gray-100 font-normal text-base  md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white  dark:border-gray-700 ${
                      clicked ? "border-b-2 border-slate-400" : ""
                    }`}
                  >
                    {items.link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
