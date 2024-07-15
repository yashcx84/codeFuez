import React, { useState, useEffect } from "react";
import "./Register.scss";
import "./Contact.scss";
import { useAuth } from "../store/auth";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { toast } from "react-toastify";
import Button from "../components/Button";
import { motion } from "framer-motion";

const defaultContactForm = {
  username: "",
  email: "",
  message: "",
};

function Contact() {
  const [contact, setContact] = useState(defaultContactForm);
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (userData && user) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
      setUserData(false);
    }
  }, [userData, user]);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/form/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    if (response.ok) {
      toast("Message sent Successfully!");
      setContact(defaultContactForm);
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="row">
          <Button />
          <motion.h1
            className="w-full capitalize my-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            get in touch with us<span>.</span>
          </motion.h1>
          <motion.div
            className="contact-head w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="w-full my-0 capitalize">contact 📞</h2>
            <hr className="w-[200px] my-4" />
          </motion.div>
          <div className="contact-options w-full mt-8">
            <motion.div
              className="social-contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="w-full text-[1em]">
                <span className="font-bold">
                  We would love to hear from you!
                </span>{" "}
                Whether you have a question about our services, want to
                collaborate, or just want to say hi, feel free to reach out
                using the options available. Our team will get back to you as
                soon as possible.
              </p>
              <h2>
                code<span className="font-bold">Fuez</span>
              </h2>
              <div className="icons w-full flex justify-start gap-3">
                <a href="https://www.instagram.com/yashcx84_/" target="blank">
                  <FaInstagram className="text-[4em] hover:bg-black hover:text-white rounded-full p-4 text-black bg-transparent transition-all duration-300 cursor-pointer border-[1px] border-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yashjangidd/"
                  target="blank"
                >
                  <IoLogoLinkedin className="text-[4em] hover:bg-black hover:text-white rounded-full p-4 text-black bg-transparent transition-all duration-300 cursor-pointer border-[1px] border-gray-300" />
                </a>
                <a href="mailto:yashcx84@gmail.com" target="blank">
                  <IoIosMail className="text-[4em] hover:bg-black hover:text-white rounded-full p-4 text-black bg-transparent transition-all duration-300 cursor-pointer border-[1px] border-gray-300" />
                </a>

                <a href="https://github.com/yashcx84" target="blank">
                  <FaGithub className="text-[4em] hover:bg-black hover:text-white rounded-full p-4 text-black bg-transparent transition-all duration-300 cursor-pointer border-[1px] border-gray-300" />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="form-contact"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <form onSubmit={handleSubmit}>
                <motion.input
                  type="text"
                  placeholder="Username"
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                />
                <motion.input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                />
                <motion.textarea
                  name="message"
                  id="message"
                  required
                  value={contact.message}
                  onChange={handleInput}
                  placeholder="Your Message Here"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                ></motion.textarea>
                <motion.div
                  className="buttonContainer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  <button type="submit" className="capitalize">
                    send message 📩
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
