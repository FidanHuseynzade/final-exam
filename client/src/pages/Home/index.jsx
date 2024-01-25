import React from "react";
import Main from "../Main";
import Icons from "../Icons";
import Dinamic from "../Dinamic";
import Contact from "../Contact";
import Overview from "../Overview";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Main />
      <Icons />
      <Dinamic />
      <Contact />
      <Overview />
    </>
  );
};

export default Home;
