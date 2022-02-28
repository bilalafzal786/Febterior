import React from "react";
import Navbar from "./Navbar/Navbar";
import Navbar2 from "./Navbar/Index";
import Navbar3 from "./Navbar/Navbar3";
import Head from "./Head/Index";
import Features from "./Features.js/Index";
import Projects from "./Products/Index";
import Team from "./Teams/Index";
import About from "./About/Index";
import Exhibition from "./Exhibition/Index";
import Footer from "./Footer/Index";
import Trending from "./Trending/Index";
import ProductOne from "./ProjectOne.js/Index";
import Product2 from "./ProjectTwo/Index";

const index = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar3 />
      <Head />
      <Features />
      <Trending />
      <Projects />
      <ProductOne />
      <Product2 />
      <Team />
      <About />
      <Exhibition />
      <Footer />

      {/* <Navbar2 /> */}
    </div>
  );
};

export default index;
