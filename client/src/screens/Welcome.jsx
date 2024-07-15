import React from "react";
import "./welcome.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="row">
        <motion.h2
          className="mb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to code<span className="font-bold">Fuez</span>
        </motion.h2>
        <motion.h1
          className="mb-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          ignite your coding journey <span>smoothly </span>🍕
        </motion.h1>
        <motion.p
          className="text-center font-normal capitalize mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          A journey that makes you stand out: Join us to master the world of
          <span className="font-bold"> Designing</span>,{" "}
          <span className="font-bold">Developing</span>, and{" "}
          <span className="font-bold">Programming</span>.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link to="/login">get started 🍺</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
