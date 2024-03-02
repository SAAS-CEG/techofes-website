// import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
// import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    // <div className="hero_area cursor-default relative">
    <div
      id="top"
      className="mt-auto p-4 flex w-full flex-col justify-center items-center gap-y-2 text-white font-courgette "
    >
      <ul className="social-icon flex gap-x-4 text-white">
        <li className="hover:rotate-[360deg] hover:scale-110 transition duration-300">
          <Link to="#">
            {" "}
            <LinkedInIcon />
          </Link>
        </li>
        <li className="hover:rotate-[360deg] hover:scale-110 transition duration-300">
          <Link to="#">
            {" "}
            <FacebookIcon />
          </Link>
        </li>
        <li className="hover:rotate-[360deg] hover:scale-110 transition duration-300">
          <Link to="#">
            {" "}
            <InstagramIcon />
          </Link>
        </li>
      </ul>
      <ul className="menu flex gap-x-4">
        <li className=" hover:font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className=" hover:font-bold">
          <Link to="#">About</Link>
        </li>
        <li className=" hover:font-bold">
          <Link to="#">Events</Link>
        </li>
        <li className=" hover:font-bold">
          <Link to="#">Sponsors</Link>
        </li>
        <li className=" hover:font-bold">
          <Link to="#">Team</Link>
        </li>
      </ul>
      <div className="flex-col">
        <Link
          href="https://Techofes24.com/"
          className="items-center	justify-center"
        >
          <p>©Copyright: SAAS 2024 of CEG, Anna University</p>
        </Link>
      </div>
      {/* </div> */}
      {/* //{" "} */}
    </div>
  );
};

export default Footer;
