import React from "react";
import "./Card.css";
import { img1 } from "../assets/index";
import { img2 } from "../assets/index";
import InstagramIcon from "@mui/icons-material/Instagram";
import PublicIcon from "@mui/icons-material/Public";
const Card = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="box" data-color="clr1">
          <div className="img1">
            <img
              src={img1}
              className=" w-44 mr-4 flex items-center justify-center"
            />
          </div>
          <div className="glass">
            <h3>
              Behindwoods
              <br></br>
              <span>Digital Partner</span>
            </h3>
            <ul>
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <PublicIcon />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
