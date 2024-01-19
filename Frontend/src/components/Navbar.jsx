import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [first, setfirst] = useState("static");
  window.addEventListener("scroll", () => {
    window.scrollY >= 500 ? setfirst("fixed") : setfirst("static");
  });

  return (
    <div className="navbar" style={{ position: first }}>
      <Link to="/" className="link">
        <p>Home</p>
      </Link>
      <Link to="/cakes" className="link">
        <p>Cakes</p>
      </Link>
      <Link to="/about" className="link">
        <p>About</p>
      </Link>
      <Link to="/blog" className="link">
        <p>Blog</p>
      </Link>
      <Link to="/contact" className="link">
        Contact{" "}
      </Link>
      <Link to="/wishlist" className="link">
        Wishlist
      </Link>
      <Link to="/basket" className="link">
        Basket
      </Link>
      <Link to="/add" className="link">
        Add
      </Link>
    </div>
  );
};

export default Navbar;
