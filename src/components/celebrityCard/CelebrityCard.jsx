import { useState } from "react";
import "./CelebrityCard.css"; // Import CSS file for card styles

// eslint-disable-next-line react/prop-types
const CelebrityCard = ({ classId }) => {
  const [bounds, setBounds] = useState(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [glowStyle, setGlowStyle] = useState({});

  const rotateToMouse = (e) => {
    if (!bounds) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    const rotation = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(${center.y / 100}, ${-center.x / 100}, 0, ${
      Math.log(distance) * 2
    }deg)
    `;

    const glowStyle = {
      backgroundImage: `radial-gradient(circle at ${
        center.x * 2 + bounds.width / 2
      }px ${center.y * 2 + bounds.height / 2}px, #ffffff55, #0000000f)`,
    };

    setGlowStyle(glowStyle);
    setTransformStyle(rotation);
  };
  const handleMouseEnter = () => {
    const cardElement = document.querySelector(`.${classId}`);

    const bounds = cardElement.getBoundingClientRect();
    setBounds(bounds);
    cardElement.addEventListener("mousemove", rotateToMouse);
  };

  const handleMouseLeave = () => {
    const cardElement = document.querySelector(`.${classId}`);

    cardElement.removeEventListener("mousemove", rotateToMouse);
    setTransformStyle("");
    setGlowStyle({});
  };

  const classNameValue = `card ${classId}`;

  return (
    <div
      className={classNameValue}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        boxShadow: "0 0 10px 10px rgba(255, 255, 255, 0.3)",
      }}
    >
      <div className="glow rounded-lg" style={glowStyle}></div>
      <div className="content"></div>
    </div>
  );
};

export default CelebrityCard;
