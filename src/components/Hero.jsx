import React from "react";

import heroImg1 from "./../assets/images/IMG-20231014-WA0009.jpg";
// import heroImg2 from "./../assets/images/imgEntreprise.png";
// import heroImg from "./../assets/image/IMG-20231014-WA0009.jpg";
const heroData = [
  {
    id: 1,
    img: heroImg1,
    title: "CENTRE CHRETIEN DE LA PROMOTION",
    titleColor: "SOCIALE",
    desc: "Le Centre Chrétien de la Promotion Sociale est une organisation chrétienne d’expansion de l’évangile accompagne des œuvres philanthropiques et humanitaires de développement.",
  },
  {
    id: 2,
    img: heroImg1,
    title: "CENTRE CHRETIEN DE LA PROMOTION",
    titleColor: "SOCIALE",
    desc: "Le Centre Chrétien de la Promotion Sociale est une organisation chrétienne d’expansion de l’évangile accompagne des œuvres philanthropiques et humanitaires de développement.",
  },
  {
    id: 3,
    img: heroImg1,
    title: "CENTRE CHRETIEN DE LA PROMOTION",
    titleColor: "SOCIALE",
    desc: "Le Centre Chrétien de la Promotion Sociale est une organisation chrétienne d’expansion de l’évangile accompagne des œuvres philanthropiques et humanitaires de développement.",
  },
];

import { Carousel, Typography, Button } from "@material-tailwind/react";

function Hero() {
  return (
    <Carousel
      className="h-[50vh] md:h-[70vh]"
      autoplay={{
        delay: 2000,
        infinite: true,
      }}
    >
      {heroData.map((heroContent) => (
        <div className="relative h-full w-full" key={heroContent.id}>
          <img
            src={heroContent.img}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-2 md:mb-4 text-lg md:text-3xl lg:text-4xl xl:text-5xl"
              >
                {heroContent.title}{" "}
                <span className=" text-blue-700">{heroContent.titleColor}</span>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className=" text-sm lg:text-lg mb-2 md:mb-12 opacity-80"
              >
                {heroContent.desc}
              </Typography>
              <div className="flex justify-center">
                <button
                  className="py-2 md:py-3 px-8 lg:px-9 rounded-full bg-blue-800 border border-blue-800
                                                text-white hover:bg-transparent hover:text-blue-800 transition"
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Hero;
