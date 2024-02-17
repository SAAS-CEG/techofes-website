import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="body">
      <div className="Footer">
        <div className="waves">
          <div className="wave1"></div>
          <div className="wave2"></div>
          <div className="wave3"></div>
          <div className="wave4"></div>
        </div>
        <ul className="social-icon">
          <li>
            <a href="#">
              {" "}
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <InstagramIcon />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Sponsors</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
        </ul>
        © TECHOFES_2024 Copyright:
        <a className="text-blue" href="https://Techofes24.com/">
          SAAS
        </a>
      </div>
    </div>
  );
};

export default Footer;
