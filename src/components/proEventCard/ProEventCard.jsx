import React, { useEffect, useState } from "react";
import pro1 from "./../../assets/pro events/pro1.svg";
import pro2 from "./../../assets/pro events/techofes-awards.png";
import pro3 from "./../../assets/pro events/talent-of-techofes.png";
import "./ProEventCard.css";

import AOS from "aos";
import "aos/dist/aos.css";

const ProEventCard = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="flex justify-center items-center m-11 gap-11">
      <div
        className="mx-10 z-10 glass w-96 h-96 bg-gradient-to-br rounded-2xl from-neutral-700 via-neutral-950 to-tranparent border border-gray-400"
        data-aos="fade-down-right"
      >
        <div className="absolute -top-10 -left-10 z-0 rounded-full w-20 h-20 bg-orange-400" />
        <img src={pro1} className="absolute bottom-4 left-10" alt="pro1" />
        <h1
          id="title"
          className="absolute -bottom-0 w-full text-6xl text-center"
        >
          CONCERT NIGHT
        </h1>
      </div>

      <div
        className="mx-10 z-10 glass relative w-96 h-96 bg-gradient-to-br rounded-2xl from-neutral-700 via-neutral-950 to-tranparent border border-gray-400"
        data-aos="fade-up"
      >
        <div className="absolute -top-10 left-1/3 z-0 rounded-full w-20 h-20 bg-violet-600" />
        <img src={pro2} className="absolute bottom-4 left-10" alt="pro1" />
        <h1
          id="title"
          className="absolute -bottom-0 w-full text-6xl text-center"
        >
          TECHOFES AWARDS
        </h1>
      </div>

      <div
        className="mx-10 z-10 glass w-96 h-96 bg-gradient-to-br rounded-2xl from-neutral-700 via-neutral-950 to-tranparent border border-gray-400"
        data-aos="fade-down-left"
      >
        <div className="absolute -top-10 -right-10 z-0 rounded-full w-20 h-20 bg-sky-400" />
        <img src={pro3} className="absolute bottom-4 left-10" alt="pro1" />
        <h1
          id="title"
          className="absolute -bottom-0 w-full text-6xl text-center"
        >
          TALENT OF TECHOFES
        </h1>
      </div>
    </div>
  );
};

export default ProEventCard;
