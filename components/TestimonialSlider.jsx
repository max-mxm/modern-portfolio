"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Thomas Dubois",
    position: "Directeur Technique, Airbus",
    message:
      "Maxime a transformé notre architecture front-end avec une expertise remarquable en React et Next.js. Son approche de l'automatisation des processus a réduit notre temps de développement de 40% et considérablement amélioré la qualité de nos livrables.",
  },
  {
    image: "/t-avt-2.png",
    name: "Marie Laurent",
    position: "Cheffe de Projet, Ministère de l'Intérieur",
    message:
      "La capacité de Maxime à créer des interfaces intuitives tout en gérant la complexité technique de nos systèmes critiques a été exceptionnelle. Son travail sur l'automatisation des workflows entre nos différents services a révolutionné notre efficacité opérationnelle.",
  },
  {
    image: "/t-avt-3.png",
    name: "Pierre Martin",
    position: "CTO, TotalEnergies",
    message:
      "J'ai rarement travaillé avec un développeur aussi polyvalent. Son expertise en React combinée à sa vision de l'automatisation nous a permis de lancer notre nouvelle plateforme en temps record, avec une qualité et une évolutivité remarquables.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
