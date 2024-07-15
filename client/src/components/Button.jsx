import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

const Button = () => {
  return (
    <>
      <div className="btn-container flex justify-start items-start mb-4">
        <Link
          to="/home"
          className="flex justify-center items-center align-middle gap-2 capitalize bg-black text-white"
        >
          <span className="text-xl font-bold">←</span> <span>back to home</span>
        </Link>
      </div>
    </>
  );
};

export default Button;
