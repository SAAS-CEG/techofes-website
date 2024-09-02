import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const ConfettiComp = () => {
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <>
      <Confetti
        width={windowDimension.width}
        height={windowDimension.height}
        tweetDuration={1000}
      />
    </>
  );
};

export default ConfettiComp;
