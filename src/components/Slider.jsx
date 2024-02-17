import React, { useState } from "react";
import { CSSTransitionGroup } from "react-transition-group";

import ReactDOM from "react-dom";

import "./maincaro.scss";
// import img3 from "../assets/img3.jpeg";
// import img4 from "../assets/img4.jpeg";
// import img5 from "../assets/img5.jpeg";
// import img6 from "../assets/img6.jpg";
// import img7 from "../assets/img7.jpeg";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slider = () => {
  // Change the slide transition type.
  var transition = "scale";
  // try translate, scale, blur, rotate

  var appearTransition = true;
  // Change it to true to add an appear transition that fades the image in from grayscale to full color.

  var slides = [
    "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?fit=crop&fm=jpg&h=825&q=80&w=1325",
    "https://images.unsplash.com/photo-1445251836269-d158eaa028a6?fit=crop&fm=jpg&h=825&q=80&w=1325",
    "https://images.unsplash.com/photo-1443926818681-717d074a57af?fit=crop&fm=jpg&h=825&q=80&w=1325",
  ];

  const [counter, setCounter] = useState(0);

  const prevSlide = () => {
    setCounter((prevCounter) =>
      prevCounter - 1 < 0 ? slides.length - 1 : prevCounter - 1
    );
  };

  const nextSlide = () => {
    setCounter((prevCounter) =>
      prevCounter + 1 < slides.length ? prevCounter + 1 : 0
    );
  };

  var style = {
    backgroundImage: "url(" + slides[counter] + ")",
  };

  return (
    <>
      <div className="carousel">
        <div className="carousel__prev" onClick={prevSlide}>
          ◀︎
        </div>
        <div className="carousel__next" onClick={nextSlide}>
          ▶︎
        </div>
        <CSSTransitionGroup
          transitionName={transition}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          component="div"
          className="carousel__slide"
          transitionAppear={appearTransition}
          transitionAppearTimeout={1000}
        >
          <div style={style} key={counter}></div>
        </CSSTransitionGroup>
      </div>
    </>
  );
};

ReactDOM.render(<Slider />, document.getElementById("root"));
export default Slider;
