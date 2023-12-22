import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WinnerCarousel = ({ candidates, winnerIndex }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 250, // Ajustez cette valeur pour changer la vitesse des transitions (plus petite = plus rapide)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // La vitesse à laquelle les slides changent en autoplay (0 désactive le défilement automatique)
    cssEase: "linear", // Utilisez une transition linéaire pour créer un effet plus fluide
    beforeChange: (current, next) => {
      if (next === winnerIndex) {
        // Arrêtez le défilement lorsque le vainqueur est atteint
        settings.autoplay = false;
      }
    },
  };

  return (
    <Slider {...settings}>
      {candidates.map((candidate, index) => (
        <div key={index}>
          <img src={candidate.photo} alt={`Candidate ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default WinnerCarousel;
