import React from "react";
import "./Service.scss";
import { useAuth } from "../store/auth";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Service() {
  const { services } = useAuth();
  
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
      <div className="service-container">
        <div className="row">
          <Button />
          <motion.h1
            className="w-full capitalize my-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let's empower your path<span>.</span>
          </motion.h1>
          <motion.div
            className="service-head w-full"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 className="w-full my-0 capitalize">our Services 🧩</motion.h2>
            <motion.hr className="w-[80%] my-4" />
          </motion.div>
          <motion.div
            className="services w-full my-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {services &&
              services.map((current, index) => {
                const { field, service, description, price, provider } = current;
                return (
                  <motion.div
                    className="service transition-all hover:border-[1px] hover:border-black duration-200 border-[1px] border-transparent hover:shadow-2xl hover:shadow-[#9e9e9e2f] cursor-pointer"
                    key={index}
                    variants={itemVariants}
                  >
                    <h2 className="uppercase font-extralight">{field}</h2>
                    <h1>{service}</h1>
                    <p>{description}</p>
                    <p className="text-gray-400">🔗 {provider}</p>
                    <div className="buttons w-full">
                      <p className="w-full p-3 font-bold bg-black text-white text-right rounded-t-lg flex justify-between">
                        <span className="font-normal uppercase text-sm">
                          Cost
                        </span>{" "}
                        <span>{price}</span>
                      </p>
                      <Link className="p-3 w-full capitalize flex justify-center items-center gap-2 duration-100 transition-all rounded-b-lg hover:gap-5 border-[1px] border-black">
                        <span className="transition-all duration-200">
                          checkout now
                        </span>{" "}
                        <span className="transition-all duration-200 text-xl font-bold">
                          →
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Service;
