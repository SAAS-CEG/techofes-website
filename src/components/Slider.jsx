import React, { useState, useRef } from "react";
import "./maincaro.css";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpeg";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slider = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      imageUrl: `url(${img3})`,
      title: "Lossless Youths",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      id: 2,
      imageUrl: `url(${img4})`,
      title: "Lossless Youths",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      id: 3,
      imageUrl: `url(${img5})`,
      title: "Lossless Youths",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      id: 4,
      imageUrl: `url(${img6})`,
      title: "Lossless Youths",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      id: 5,
      imageUrl: `url(${img7})`,
      title: "Lossless Youths",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
  ]);

  const sliderRef = useRef(null);

  const activateNext = (e) => {
    sliderRef.current.prepend();
    console.log(".next");
  };

  const activatePrev = (e) => {
    sliderRef.current.append();
    console.log(".prev");
  };

  return (
    <div className="main">
      <ul className="Slider" ref={sliderRef}>
        {items.map((item, index) => (
          <li
            key={index}
            className="item"
            style={{ backgroundImage: item.imageUrl }}
          >
            <div className="content">
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
              <button>Read More</button>
            </div>
          </li>
        ))}
      </ul>
      <nav className="nav">
        <button onClick={activateNext} className="prev">
          <ArrowBackIosNewIcon />
        </button>
        <button onClick={activatePrev} className="next">
          <ArrowForwardIosIcon />
        </button>
      </nav>
    </div>
  );
};
export default Slider;
