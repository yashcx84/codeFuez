import React from "react";
import "./Footer.scss";

const Footer = () => {
  const date = new Date();
  const myDateObj = date.getFullYear();
  return (
    <>
      <div className="footer-container">
        <div className="row">
          <p className="w-full text-center">codeFuez@{myDateObj}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
