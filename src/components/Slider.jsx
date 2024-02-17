import React from "react";
import "./maincaro.css";
import "./Slider.jsx";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpeg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Maincaro = () => {
  console.log("lasjdflaks");
  return (
    <div className="main">
      <ul className="slider">
        <li className="item" style={{ backgroundImage: `url(${img3})` }}>
          {/* <img src={img3} /> */}
          <div className="content">
            <h2 className="title">"Lossless Youths"</h2>
            <p className="description">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li className="item" style={{ backgroundImage: `url(${img4})` }}>
          <div className="content">
            <h2 className="title">"Estrange Bond"</h2>
            <p className="description">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li className="item" style={{ backgroundImage: `url(${img5})` }}>
          <div className="content">
            <h2 className="title">"The Gate Keeper"</h2>
            <p className="description">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li className="item" style={{ backgroundImage: `url(${img6})` }}>
          <div className="content">
            <h2 className="title">"Last Trace Of Us"</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        {/* <li className="item" src img={img6}>
          <div className="content">
            <h2 className="title">"Urban Decay"</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li> */}
        <li className="item" style={{ backgroundImage: `url(${img7})` }}>
          <div className="content">
            <h2 className="title">"The Migration"</h2>
            <p className="description">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <button>Read More</button>
          </div>
        </li>
      </ul>
      <nav className="nav">
        <ArrowBackIosNewIcon />
        <ArrowForwardIosIcon />
      </nav>
    </div>
  );

  //   <script
  //     type="module"
  //     src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
  //   ></script>
  //   <script
  //     nomodule
  //     src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
  //   ></script>
};

export default Maincaro;
