import { useEffect } from "react";
import "./workshop.scss";

const Workshops = () => {
  useEffect(() => {
    console.clear();
    const cardcarousel = document.querySelector(".cardcarousel");
    playAnimation(cardcarousel);
  });

  let interval;

  function arrayFromNodeList(nodelist) {
    return [].slice.call(nodelist);
  }

  function rotateCards(cards) {
    cards.forEach((card) => {
      const classes = card.classList;
      if (classes.contains("right")) {
        classes.remove("right");
      } else if (classes.contains("left")) {
        classes.remove("left");
        classes.add("right");
      } else {
        classes.add("left");
      }
    });
  }

  function playAnimation(cardcarousel) {
    cardcarousel.classList.remove("paused");
    const cards = arrayFromNodeList(
      cardcarousel.querySelectorAll(".revolveCard")
    );
    rotateCards(cards);
    clearInterval(interval);
    return (interval = setInterval(() => {
      rotateCards(cards);
    }, 5000));
  }

  return (
    <div role="button" tabIndex="0" className="cardcarousel min-h-[65.8vh]">
      <div id="item1" className="revolveCard left">
        1
      </div>
      <div id="item2" className="revolveCard">
        2
      </div>
      <div id="item3" className="revolveCard right">
        3
      </div>
    </div>
  );
};

export default Workshops;
