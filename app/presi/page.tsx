"use client";

import React, { useState } from "react";
import Slider from "react-slick";

export default function Presi() {
  let [step, setStep] = useState(1);
  let i = 0;

  //   Carousel settings
  let [autoplay, setAutoPlay] = useState(true);
  const settings = {
    dots: false,
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 5,
    cssEase: "none",
    pauseOnHover: false,

    beforeChange: (current: any, next: any) => {
      i++;
      if (i >= 100 && next == 3) {
        setAutoPlay(false);

        console.log(next);
        console.log(current);
      }
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-8 h-full pt-4 md:pt-8">
      <Slider {...settings} className="">
        <div className="fdfd">
          <img
            src="images/man.jpg"
            alt=""
            className="result-image text-center object-contain block mx-auto"
          />
        </div>
        <div className="">
          <img
            src="images/woman.jpg"
            alt=""
            className="result-image text-center object-contain block mx-auto"
          />
        </div>
        <div className="">
          <img
            src="images/max.jpg"
            alt=""
            className="result-image text-center object-contain block mx-auto"
          />
        </div>
        <div className="">
          <img
            src="images/aiony.jpg"
            alt=""
            className="result-image text-center object-contain block mx-auto"
          />
        </div>
      </Slider>
    </div>
  );
}
