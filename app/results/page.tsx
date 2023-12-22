"use client";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "../globals.scss"; // Assurez-vous d'importer ou de définir les styles CSS nécessaires

export default function Results() {
  let i = 0;
  let [step, setStep] = useState(1);

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

  // Hides the text and launches the Candidates carousel
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setStep(2);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main className="h-full">
      {step == 1 ? (
        <div className="w-full max-w-3xl mx-auto px-4 md:px-8 flex items-center h-full fade-in">
          <h2 className="mb-8 -translate-y-14 flex mx-auto text-center">
            Le Président de la 7e Promotion de l'IDSI est
          </h2>
        </div>
      ) : (
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
      )}
    </main>
  );
}
