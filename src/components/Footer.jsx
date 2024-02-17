import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="w-full mx-0">
      <div className="text-center p-3 bg-cyan-700">
        <div className="w-full flex items-center justify-center">
          <LinkedInIcon />
          <FacebookIcon />
          <InstagramIcon />
        </div>
        © TECHOFES_2024 Copyright:
        <a className="text-blue" href="https://Techofes24.com/">
          SAAS
        </a>
      </div>
    </div>
  );
};

export default Footer;