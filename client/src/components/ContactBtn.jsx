import React from "react";
import { useNavigate } from "react-router-dom";

const ContactBtn = () => {
  const redirect = useNavigate();
  return (
    <>
      <div className="contact-btn fixed bottom-5 left-5">
        <button
          onClick={() => {
            redirect("/contact");
          }}
          className=" bg-black text-white flex justify-center items-center rounded-full hover:translate-x-2 transition-all duration-200 hover:scale-95"
        >
          Contact 📨
        </button>
      </div>
    </>
  );
};

export default ContactBtn;
