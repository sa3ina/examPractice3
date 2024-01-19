import React from "react";
import About from "./About";
import Contact from "./Contact";
import Cakes from "./Cakes";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <About />
      <Contact />
      <Cakes />
    </>
  );
};

export default Home;
