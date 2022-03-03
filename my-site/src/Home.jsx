import React from "react";
import File from "./File";
import webImg from "./images/homeimg.jpg";

const Home = () => {
  return (
    <>
    <File 
        name = "Grow your Business with"
        message = "We are the team of talented Developers making websites..."
        imgsrc = {webImg}
        visit = "/services"
        btn = "Get Started"
    />
    </>
  );
};

export default Home;
