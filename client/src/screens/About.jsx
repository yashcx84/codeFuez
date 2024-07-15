import React from "react";
import "./About.scss";
import Button from "../components/Button";
import ContactBtn from "../components/ContactBtn";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="row">
          <Button />
          <motion.h1
            className="w-full capitalize my-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Navigate the journey<span>.</span>
          </motion.h1>
          <div className="about w-full">
            <div className="about-head">
              <motion.h2
                className="w-full my-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                Our Story 🍀
              </motion.h2>
              <motion.hr
                className="w-[80%] my-4"
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="about-para">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                At CodeFuez, our journey began with a shared passion for
                empowering individuals through technology. What started as a
                vision to bridge the gap between aspiration and achievement has
                evolved into a thriving platform dedicated to nurturing coding
                skills and fostering innovation. Since our inception, we've been
                committed to creating an inclusive community where learners of
                all backgrounds can explore, learn, and excel in programming.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <ContactBtn />
    </>
  );
}

export default About;
