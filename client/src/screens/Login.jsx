import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function Login() {
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      if (response.ok) {
        storeTokenInLS(res_data.token);
        toast.success("Login Successful!", {
          className: "toast",
          bodyClassName: "toast-body",
          progressClassName: "toast-progress",
        });
        setUser({
          email: "",
          password: "",
        });
        navigate("/home");
      } else {
        toast.error(res_data.extraDetails || "Invalid Credentials", {
          className: "toast",
          bodyClassName: "toast-body",
          progressClassName: "toast-progress",
        });
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.", {
        className: "toast",
        bodyClassName: "toast-body",
        progressClassName: "toast-progress",
      });
    }
  };

  return (
    <div className="registerContainer">
      <div className="row">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome Back<span>.</span>
        </motion.h1>
        <div className="login-head">
          <motion.h2
            className="w-full my-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Login to Your Account 🔐
          </motion.h2>
        </div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleInput}
          />
          <div className="buttonContainer">
            <button type="submit">LogIn</button>
            <Link to="/register">New user?</Link>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

export default Login;
