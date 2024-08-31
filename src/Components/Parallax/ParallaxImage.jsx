import React from "react";
import { Parallax } from "react-scroll-parallax";

const ParallaxImage = () => {
  return (
    <div className="">
      <Parallax speed={5}>
        <img src="https://i.ibb.co/x7Yh3t2/Banner4.jpg" className="w-full" alt="" />
      </Parallax>
    </div>
  );
};

export default ParallaxImage;
