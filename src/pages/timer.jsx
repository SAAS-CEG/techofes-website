import React, { useState, useEffect, useRef } from "react";
import TweenMax from "gsap"; // Make sure you import the necessary TweenMax library
import "./timer.css";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const $el = useRef(null);
  let countdownInterval = null;

  useEffect(() => {
    const endDate = new Date("March 13, 2024 17:00:00").getTime();
    countDownToEndDate(endDate);
    return () => clearInterval(countdownInterval);
  }, []);

  const countDownToEndDate = (endDate) => {
    countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = endDate - now;

      if (timeDifference > 0) {
        const remainingDays = Math.floor(
          timeDifference / (1000 * 60 * 60 * 24)
        );
        const remainingHours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const remainingMinutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const remainingSeconds = Math.floor(
          (timeDifference % (1000 * 60)) / 1000
        );

        setDays(remainingDays);
        setHours(remainingHours);
        setMinutes(remainingMinutes);
        setSeconds(remainingSeconds);
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);
  };

  const animateFigure = ($el, value) => {
    const $top = $el.querySelector(".top");
    const $bottom = $el.querySelector(".bottom");
    const $backTop = $el.querySelector(".top-back");
    const $backBottom = $el.querySelector(".bottom-back");

    // Before we begin, change the back value
    $backTop.querySelector("span").innerHTML = value;
    $backBottom.querySelector("span").innerHTML = value;

    // Then animate
    TweenMax.to($top, 0.8, {
      rotationX: "-180deg",
      transformPerspective: 300,
      ease: "Quart.easeOut",
      onComplete: () => {
        $top.innerHTML = value;
        $bottom.innerHTML = value;
        TweenMax.set($top, { rotationX: 0 });
      },
    });

    TweenMax.to($backTop, 0.8, {
      rotationX: 0,
      transformPerspective: 300,
      ease: "Quart.easeOut",
      clearProps: "all",
    });
  };

  useEffect(() => {
    updateDOM();
  }, [days, hours, minutes, seconds]);

  const updateDOM = () => {
    const $days1 = $el.current.querySelector(".bloc-time.days .figure.days-1");
    const $days2 = $el.current.querySelector(".bloc-time.days .figure.days-2");
    const $hours1 = $el.current.querySelector(
      ".bloc-time.hours .figure.hours-1"
    );
    const $hours2 = $el.current.querySelector(
      ".bloc-time.hours .figure.hours-2"
    );
    const $minutes1 = $el.current.querySelector(".bloc-time.min .figure.min-1");
    const $minutes2 = $el.current.querySelector(".bloc-time.min .figure.min-2");
    const $seconds1 = $el.current.querySelector(".bloc-time.sec .figure.sec-1");
    const $seconds2 = $el.current.querySelector(".bloc-time.sec .figure.sec-2");

    checkHour(days, $days1, $days2);
    checkHour(hours, $hours1, $hours2);
    checkHour(minutes, $minutes1, $minutes2);
    checkHour(seconds, $seconds1, $seconds2);
  };

  const checkHour = (value, $el1, $el2) => {
    const val1 = value.toString().charAt(0);
    const val2 = value.toString().charAt(1);
    const fig1Value = $el1.querySelector(".top").innerHTML;
    const fig2Value = $el2.querySelector(".top").innerHTML;

    if (value >= 10) {
      // Animate only if the figure has changed
      if (fig1Value !== val1) animateFigure($el1, val1);
      if (fig2Value !== val2) animateFigure($el2, val2);
    } else {
      // If we are under 10, replace first figure with 0
      if (fig1Value !== "0") animateFigure($el1, 0);
      if (fig2Value !== val1) animateFigure($el2, val1);
    }
  };

  return (
    <div className="countdown flex flex-col rounded-lg" ref={$el}>
      <div>
        <div className="bloc-time days rounded-lg">
          <span className="count-title">Days</span>
          <div className="figure days days-1 rounded-lg">
            <span className="top rounded-lg">0</span>
            <span className="top-back">
              <span>0</span>
            </span>
            <span className="bottom">0</span>
            <span className="bottom-back">
              <span>0</span>
            </span>
          </div>
          <div className="figure days days-2">
            <span className="top">0</span>
            <span className="top-back">
              <span>0</span>
            </span>
            <span className="bottom">0</span>
            <span className="bottom-back">
              <span>0</span>
            </span>
          </div>
        </div>

        <div className="bloc-time hours">
          <span className="count-title">Hours</span>
          <div className="figure hours hours-1">
            <span className="top">0</span>
            <span className="top-back">
              <span>0</span>
            </span>
            <span className="bottom">0</span>
            <span className="bottom-back">
              <span>0</span>
            </span>
          </div>
          <div className="figure hours hours-2">
            <span className="top">0</span>
            <span className="top-back">
              <span>0</span>
            </span>
            <span className="bottom">0</span>
            <span className="bottom-back">
              <span>0</span>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="bloc-time min">
          <span className="count-title">Minutes</span>
          <div className="figure min min-1">
            <span className="top">0</span>
            <span className="top-back">
              <span>0</span>
            </span>
            <span className="bottom">0</span>
            <span className="bottom-back">
              <span>0</span>
            </span>
          </div>
          <div className="figure min min-2">
            <span className="top">0</span>
            <span className="top-back">
              <span>0</span>
            </span>
            <span className="bottom">0</span>
            <span className="bottom-back">
              <span>0</span>
            </span>
          </div>
        </div>

        <div className="bloc-time sec">
          <span className="count-title">Seconds</span>
          <div className="figure sec sec-1">
            <span className="top">0</span>
            <span className="top-back">
              <span>0</span>
            </span>
            <span className="bottom">0</span>
            <span className="bottom-back">
              <span>0</span>
            </span>
          </div>
          <div className="figure sec sec-2">
            <span className="top">0</span>
            <span className="top-back">
              <span>0</span>
            </span>
            <span className="bottom">0</span>
            <span className="bottom-back">
              <span>0</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
