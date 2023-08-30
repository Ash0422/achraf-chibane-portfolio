import React from "react";
import "../styles/backg.css";
import video from "../assets/universe2.mp4";
import fallBimage from "../assets/fallback-img.jpg";

const Background = () => {
  return (
    <>
      <div className="shadow-over"></div>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        id="bg"
        poster={fallBimage}
      >
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};

export default Background;
