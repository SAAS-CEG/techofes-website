// import React from 'react';
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="hero_area relative">
      <svg
        className="absolute waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="#192485" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="#64B5F6" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="#1976D2" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#0D47A1" />
        </g>
      </svg>

      <div className="absolute flex w-full flex-col justify-center items-center gap-y-2 ">
        <ul className="social-icon flex gap-x-4">
          <li>
            <Link to="#">
              {" "}
              <LinkedInIcon />
            </Link>
          </li>
          <li>
            <Link to="#">
              {" "}
              <FacebookIcon />
            </Link>
          </li>
          <li>
            <Link to="#">
              {" "}
              <InstagramIcon />
            </Link>
          </li>
        </ul>
        <ul className="menu flex gap-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Events</Link>
          </li>
          <li>
            <Link to="#">Sponsors</Link>
          </li>
          <li>
            <Link to="#">Team</Link>
          </li>
        </ul>
        <div className="flex">
          <p>© TECHOFES_2024 Copyright:</p>
          <Link className="text-blue" href="https://Techofes24.com/">
            SAAS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
