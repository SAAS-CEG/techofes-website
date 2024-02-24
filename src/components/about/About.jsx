import { useState, useEffect } from "react";
import "./About.css"; // Import CSS file for animation styles
import { T77_logopng } from "./../../assets/index/";

const About = () => {
  const [isVisibleLeft, setIsVisibleLeft] = useState(false);
  const [isVisibleRight, setIsVisibleRight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const slideInLeftElement = document.querySelector(".about-outer");
      const slideInRightElement = document.querySelector(".about-outer");

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
    <div className="flex flex-col md:flex-row justify-center items-center p-2 md:p-10 about-outer">
      <div
        className={`w-full md:w-1/2 slide-in-left ${
          isVisibleLeft ? "active" : ""
        }`}
      >
        <div className="glass p-8 border-none">
          <div className="text-xl md:text-3xl mb-5 font-anta flex justify-center items-center">
            ABOUT US
          </div>
          <div className="text-sm md:text-lg text-center font-thin tracking-wide font-viga">
            Techofes, celebrated as the largest cultural festival in South
            India, is gearing up for its 77th edition. As CEG's renowned
            inter-college cultural fest, Techofes provides a vibrant platform
            for students from across the nation to showcase their diverse
            talents. With numerous events, workshops, and shows, the festival is
            dedicated to nurture creativity and celebrating soulful talents. The
            theme for this year,"Eco Beats," echoes Techofes's commitment to
            fostering global connections and sustainability. This theme infuses
            every aspect of the festival, shaping around captivating events
            spanning various art forms over three exhilarating days. The
            excitement culminates in the electrifying pro shows like Concert
            Night, DJ Night, and the T-Awards screening, offering an
            unforgettable experience that transcends words.
          </div>
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
