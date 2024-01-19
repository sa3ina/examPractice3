import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const NavbarTop = () => {
  return (
    <div className="navbartop">
      <div className="social">
        <p>
          <FacebookIcon />
        </p>
        <p>
          <InstagramIcon />
        </p>
        <p>
          <TwitterIcon />
        </p>
      </div>
      <div>
        <img
          src="https://preview.colorlib.com/theme/cakeshop/assets/img/logo/logo.png"
          alt=""
        />
      </div>
      <div>
        <p className="call">Call Us: +10 783 346 4378</p>
      </div>
    </div>
  );
};

export default NavbarTop;
