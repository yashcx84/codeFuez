import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ContactBtn from "../components/ContactBtn";
import { motion } from "framer-motion";

const Docs = () => {
  return (
    <>
      <div className="docs-container">
        <div className="row">
          <Button />
          <motion.h1
            className="w-full capitalize my-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Documentation differs.
          </motion.h1>
          <div className="about w-full">
            <motion.div
              className="about-head"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="w-full my-0">Docs 🗞</h2>
              <hr className="w-[80%] my-4" />
            </motion.div>
            <motion.div
              className="about-para"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p>
                At CodeFuez, our journey began with a shared passion for
                empowering individuals through technology. What started as a
                vision to bridge the gap between aspiration and achievement has
                evolved into a thriving platform dedicated to nurturing coding
                skills and fostering innovation. Since our inception, we've been
                committed to creating an inclusive community where learners of
                all backgrounds can explore, learn, and excel in programming.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <ContactBtn />
    </>
  );
};

export default Docs;
