import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth.jsx";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "./Register.scss";

function Register() {
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("https://codefuez-server.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        toast("Registration Successful");
        navigate("/home");
      } else if (response.statusText === "Bad Request") {
        toast.error("Email already exists.", {
          className: "toast",
          bodyClassName: "toast-body",
          progressClassName: "toast-progress",
        });
      } else {
        toast.error(res_data.extraDetails, {
          className: "toast",
          bodyClassName: "toast-body",
          progressClassName: "toast-progress",
        });
      }
    } catch (error) {
      console.log("Register Error ", error);
    }
  };

  return (
    <>
      <div className="registerContainer">
        <div className="row">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Become a Member<span>.</span>
          </motion.h1>
          <motion.div
            className="login-head"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="w-full my-0">Sign Up to Get Started 🌟</h2>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              required
              autoComplete="off"
              value={user.username}
              onChange={handleInput}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
            <motion.input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              required
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
            <motion.input
              type="number"
              placeholder="Phone"
              name="phone"
              id="phone"
              required
              autoComplete="off"
              value={user.phone}
              onChange={handleInput}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            <motion.input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              required
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            />
            <motion.div
              className="buttonContainer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <button type="submit">SignUp</button>
              <Link to="/login">Already a user?</Link>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </>
  );
}

export default Register;
