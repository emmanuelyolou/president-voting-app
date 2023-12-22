'use client'
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 50, // Ajustez cette valeur pour changer la vitesse des transitions (plus petite = plus rapide)
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // La vitesse à laquelle les slides changent en autoplay (0 désactive le défilement automatique)
        cssEase: 'linear', 
        pauseOnHover: false

        // beforeChange: (current, next) => {
        //     if (next === winnerIndex) {
        //       // Arrêtez le défilement lorsque le vainqueur est atteint
        //       settings.autoplay = false;
        //     }
        // }
    };
    return (
      <main>
          <div className="w-full max-w-3xl mx-auto px-4 md:px-8">
            <h2 className="mb-8"> Le Président est</h2>
            <Slider {...settings} className="">
                <div className="bg-green-200 h-96">
                    <div className="flex justify-center">1</div>
                </div>
                <div className="bg-blue-200 h-96">
                    <div className="flex justify-center">2</div>
                </div>
                <div className="bg-red-200 h-96">
                    <div className="flex justify-center">3</div>
                </div>
                <div className="bg-gray-200 h-96">
                    <div className="flex justify-center">4</div>
                </div>
                <div className="bg-green-200 h-96">
                    <div className="flex justify-center">5</div>
                </div>
            </Slider>
          </div>
      </main>
    );
  }
}