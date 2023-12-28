import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./offers.css";
import img1 from "../../assets/offersImg/pic1.png";
import img2 from "../../assets/offersImg/pic2.jpeg";
import img3 from "../../assets/offersImg/pic3.jpeg";
import img4 from "../../assets/offersImg/pic4.jpeg";

const Offers = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="offer-heading">
        <h1>Offers</h1>
        <p>Promotions, deals and special offers for you</p>
      </div>
      <Slider {...settings} className="slider">
        <div className="testimonial ">
          <div className="offer">
            <div className="offer-content">
              <h2>Fly away to your dream holiday</h2>
              <p>
                Get inspired, compare and book flights with more flexibility
              </p>
              <button className="headerBtn offer-btn">
                Search for flights
              </button>
            </div>
            <img src={img1} alt="" className="offer-imgs " />
          </div>
        </div>

        <div className="testimonial  ">
          <div className="offer">
            <div className="offer-content">
              <h2>Fly away to your dream holiday</h2>
              <p>
                Get inspired, compare and book flights with more flexibility
              </p>
              <button className="headerBtn offer-btn">
                Search for flights
              </button>
            </div>
            <img src={img2} alt="" className="offer-imgs" />
          </div>
        </div>

        <div className="testimonial1 tes1">
          <div className="offer1">
            <div className="offer-content">
              <h2>Fly away to your dream holiday</h2>
              <p>
                Get inspired, compare and book flights with more flexibility
              </p>
              <button className="headerBtn offer-btn">
                Search for flights
              </button>
            </div>
            <img src={img3} alt="" className="offer-img" />
          </div>
        </div>

        <div className="testimonial tes1">
          <div className="offer1">
            <div className="offer-content">
              <h2>Fly away to your dream holiday</h2>
              <p>
                Get inspired, compare and book flights with more flexibility
              </p>
              <button className="headerBtn offer-btn">
                Search for flights
              </button>
            </div>
            <img src={img4} alt="" className="offer-img" />
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Offers;
