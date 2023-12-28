import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./blogList.css";
import blogData from "../../data/blogData";

import sliderimg1 from "../../assets/blglist-slider-img/slider-img1.jpg";
import sliderimg2 from "../../assets/blglist-slider-img/slider-img2.jpg";
import sliderimg3 from "../../assets/blglist-slider-img/slider-img3.jpg";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Bloglist = () => {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "500px",
  };

  const slideImages = [
    {
      url: sliderimg1,
    },
    {
      url: sliderimg2,
    },
    {
      url: sliderimg3,
    },
  ];
  return (
    <>
      <Navbar />

      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>

      <div className="bloglist-heading  ">
        <h1>Read Our Blog & Get inspiration for your next trip</h1>
      </div>
      <hr className="divider" />
    </>
  );
};
export default Bloglist;
