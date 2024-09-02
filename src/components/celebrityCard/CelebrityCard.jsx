import { useState } from "react";
import "./CelebrityCard.css"; // Import CSS file for card styles

// The CelebrityCard component accepts a classId prop for dynamic styling
// eslint-disable-next-line react/prop-types
const CelebrityCard = ({ classId }) => {
  const [bounds, setBounds] = useState(null); // State to store the card's bounding box
  const [transformStyle, setTransformStyle] = useState(""); // State to store the transform style
  const [glowStyle, setGlowStyle] = useState({}); // State to store the glow effect style

  // Function to handle mouse movement and calculate rotation and glow effects
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

    // Calculate the rotation and scaling based on the mouse position
    const rotation = `
			scale3d(1.07, 1.07, 1.07)
			rotate3d(${center.y / 100}, ${-center.x / 100}, 0, ${Math.log(distance) * 2}deg)
		`;

    // Create a glow effect that follows the mouse cursor
    const glowStyle = {
      backgroundImage: `radial-gradient(circle at ${
        center.x * 2 + bounds.width / 2
      }px ${center.y * 2 + bounds.height / 2}px, #ffffff55, #0000000f)`,
    };

    setGlowStyle(glowStyle); // Update the glow style
    setTransformStyle(rotation); // Update the transform style
  };

  // Function to handle mouse entering the card element
  const handleMouseEnter = () => {
    const cardElement = document.querySelector(`.${classId}`); // Select the card element using the classId

    const bounds = cardElement.getBoundingClientRect(); // Get the bounding box of the card element
    setBounds(bounds);
    cardElement.addEventListener("mousemove", rotateToMouse); // Attach the rotateToMouse function to mousemove event
  };

  // Function to handle mouse leaving the card element
  const handleMouseLeave = () => {
    const cardElement = document.querySelector(`.${classId}`); // Select the card element using the classId

    cardElement.removeEventListener("mousemove", rotateToMouse); // Remove the rotateToMouse function from mousemove event
    setTransformStyle(""); // Reset the transform style
    setGlowStyle({}); // Reset the glow style
  };

  // Combine the card class with the classId for dynamic styling
  const classNameValue = `card ${classId}`;

  return (
    <div
      className={classNameValue}
      onMouseEnter={handleMouseEnter} // Trigger the mouse enter event
      onMouseLeave={handleMouseLeave} // Trigger the mouse leave event
      style={{
        transform: transformStyle, // Apply the transform style
        // boxShadow: "0 0 10px 10px rgba(255, 255, 255, 0.3)", // Optionally apply a shadow
      }}
    >
      <div
        className="glow rounded-lg"
        style={glowStyle} // Apply the glow style
      ></div>
      <div className="content"></div> {/* Placeholder for card content */}
    </div>
  );
};

export default CelebrityCard;
