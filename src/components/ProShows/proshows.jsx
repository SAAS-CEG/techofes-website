import { animate } from "framer-motion";
import "./proshows.css";
import { useState, useEffect, useRef } from "react";

function Proshows() {
  const [isVisible, setIsVisible] = useState(false);
  const animatedElementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (animatedElementRef.current) {
        const top = animatedElementRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="md:px-20 mt-14 w-full justify-around items-center flex-wrap flex gap-10 min-h-[50vh]">
        <div className={`${isVisible ? "card-animate1" : "hidden"}`}>
          <div
            className="w-80 h-96 rounded-3xl border-2 border-white"
            style={{
              backgroundImage:
                "linear-gradient(129deg, rgba(255,255,255,0.2) 13%, rgba(213,213,213,0.2) 42%, rgba(181,181,181,0.5) 72%, rgba(94,94,94,0.75) 98%)",
            }}
          >
            {console.log(1)}
          </div>
        </div>
        <div className={`${isVisible ? "card-animate1" : "hidden"}`}>
          <div
            className="w-80 h-96 rounded-3xl border-2 border-white"
            style={{
              backgroundImage:
                "linear-gradient(129deg, rgba(255,255,255,0.2) 13%, rgba(213,213,213,0.2) 42%, rgba(181,181,181,0.5) 72%, rgba(94,94,94,0.75) 98%)",
            }}
          >
            {console.log(1)}
          </div>
        </div>
        <div className={`${isVisible ? "card-animate1" : "hidden"}`}>
          <div
            className="w-80 h-96 rounded-3xl border-2 border-white"
            style={{
              backgroundImage:
                "linear-gradient(129deg, rgba(255,255,255,0.2) 13%, rgba(213,213,213,0.2) 42%, rgba(181,181,181,0.5) 72%, rgba(94,94,94,0.75) 98%)",
            }}
          >
            {console.log(1)}
          </div>
        </div>
      </div>
      <div ref={animatedElementRef}></div>
    </div>
  );
}

export default Proshows;
