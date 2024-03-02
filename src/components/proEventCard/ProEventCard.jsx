import { useEffect } from "react";
import "./ProEventCard.css";
import "./TextAnimation.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ProEventCard = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out-quart",
      delay: 100,
    });
  }, []);

  const proEvents = [
    {
      image: "",
      css: "absolute -top-10 -left-10 z-0 rounded-full w-20 h-20 bg-orange-400",
      animation: "fade-down-right",
    },
    {
      image: "",
      css: "absolute -top-10 left-28 z-0 rounded-full w-20 h-20 bg-violet-600",
      animation: "fade-up",
    },
    {
      image: "",
      css: "absolute -top-10 -right-10 z-0 rounded-full w-20 h-20 bg-sky-400",
      animation: "fade-down-left",
    },
  ];

  return (
    <div className="flex md:flex-row justify-center items-center m-11 gap-11">
      {proEvents.map((event, i) => {
        return (
          <div
            key={i}
            className="md:mt-0 mt-28 mx-10 z-10 glass w-80 h-80 bg-gradient-to-br rounded-2xl from-neutral-700 via-neutral-950 to-tranparent border border-gray-400"
            data-aos={event.animation}
          >
            <div className={event.css} />
            <div className="mt-3 py-1">
              <h1 className="text">Coming soon...</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProEventCard;
