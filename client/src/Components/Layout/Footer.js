import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">All Right Reserved @ Keshav</h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>
        <span>|</span>
        <Link to="/contact">Contact</Link>
        <span>|</span>
        <Link to="/policy">Policy</Link>
      </p>
    </div>
  );
};

export default Footer;