"use client";
import React from "react";
import Slider from "react-slick";
export const Carusel = ({ bool, data }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: bool,
    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data?.map((item) => (
          <div className="w-full" key={item?.id}>
            <img className="w-[70%]" src={item?.img} alt="iman " />
          </div>
        ))}
      </Slider>
    </div>
  );
};
