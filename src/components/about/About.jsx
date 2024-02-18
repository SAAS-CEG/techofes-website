import { useState, useEffect } from "react";
import "./About.css"; // Import CSS file for animation styles
import { T77_logopng } from "./../../assets/index/";

const About = () => {
  const [isVisibleLeft, setIsVisibleLeft] = useState(false);
  const [isVisibleRight, setIsVisibleRight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const slideInLeftElement = document.querySelector(".slide-in-left");
      const slideInRightElement = document.querySelector(".slide-in-right");

      // Calculate the position of the left element relative to the viewport
      const leftElementTop = slideInLeftElement.getBoundingClientRect().top;
      const leftElementBottom =
        slideInLeftElement.getBoundingClientRect().bottom;

      // Calculate the position of the right element relative to the viewport
      const rightElementTop = slideInRightElement.getBoundingClientRect().top;
      const rightElementBottom =
        slideInRightElement.getBoundingClientRect().bottom;

      // If the left element is in the viewport, trigger slide-in animation
      if (leftElementTop < window.innerHeight && leftElementBottom > 0) {
        setIsVisibleLeft(true);
      } else {
        setIsVisibleLeft(false); // Slide back when scrolled out of view
      }

      // If the right element is in the viewport, trigger slide-in animation
      if (rightElementTop < window.innerHeight && rightElementBottom > 0) {
        setIsVisibleRight(true);
      } else {
        setIsVisibleRight(false); // Slide back when scrolled out of view
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure effect runs only once

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-5 md:p-10 overflow-hidden">
      <div
        className={`w-full md:w-1/2 slide-in-left ${
          isVisibleLeft ? "active" : ""
        }`}
      >
        <div className="text-3xl md:text-6xl mb-5 font-anta">About</div>
        <div className="text-sm md:text-lg text-justify font-thin tracking-wide font-viga">
          Techofes, an annual extravaganza hosted at the College of Engineering,
          Guindy, is a celebration that ignites the spirits of students from
          across India. Bursting with fiery performances and captivating musical
          acts, Techofes sets the stage for an unforgettable experience. Each
          year, this grand event showcases the incredible talent and creativity
          of young minds, bringing together a diverse array of performances,
          competitions, and cultural showcases. From electrifying dance
          performances to soul-stirring music, Techofes promises a vibrant
          tapestry of entertainment and excitement. As students gather to
          celebrate innovation, artistry, and camaraderie, Techofes embodies the
          spirit of youthful enthusiasm and excellence.
        </div>
      </div>
      <div
        className={`w-full md:w-1/2 flex justify-center slide-in-right ${
          isVisibleRight ? "active" : ""
        }`}
      >
        <img src={T77_logopng} className="w-3/5"></img>
      </div>
    </div>
  );
};

export default About;
