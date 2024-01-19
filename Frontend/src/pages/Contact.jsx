import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="contact">
        <div className="cont">
          <p className="schilers">
            This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.
          </p>
          <div className="line"></div>
          <div className="imgg">
            <div>
              {" "}
              <p className="this">
                This is Schilers. Awesome Food Theme. Purchase it and eat
                Burgers.
              </p>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercita tion ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute dolor in reprehen
                derit in voluptate velit esse cillum.
              </p>
              <p className="text">
                Consectetur adipiscing elit, sed do eiusmod tempor dunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercita tion ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute dolor in reprehen derit in
                voluptate velit esse cillum.
              </p>
            </div>
            <img
              src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/about1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
