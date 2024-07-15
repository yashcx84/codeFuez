import React from "react";
import "./welcome.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import ContactBtn from "../components/ContactBtn";
import { motion } from "framer-motion";

function Home() {
  const { user } = useAuth();

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="home-container">
        <div className="row">
          <motion.h2
            className="mb-2 capitalize"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            hello! <span className="font-bold">{user.username}</span>
          </motion.h2>
          <motion.h1
            className="mb-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            CodeFuez just 🎧 <span>Illuminates</span> Your Path<span>.</span>
          </motion.h1>
          <motion.p
            className="text-center font-normal capitalize mb-2"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            Uncover <span className="font-bold">codeFuez’s</span> top-notch
            courses tailored to{" "}
            <span className="font-bold ">Boost your skills</span>. Embark on
            your learning journey with us in the dynamic world of technology.
          </motion.p>
          <motion.div
            className="button-container mt-2 flex justify-center align-middle gap-3"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <Link to="/services">explore now 🧩</Link>
            <Link to="/docs">view docs 🗞</Link>
          </motion.div>
        </div>
      </div>

      <ContactBtn />
    </>
  );
}

export default Home;
