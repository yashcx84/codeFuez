const { z } = require("zod");

// we need to create an object schema

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name should be at least of 3 chars" })
    .max(8, { message: "Name should be max at 8 chars" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email Address!" })
    .min(5, { message: "Email should be at least of 3 chars" })
    .max(255, { message: "Email should be max at 8 chars" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone should be at least of 10 chars" })
    .max(20, { message: "Phone should be max at 20 chars" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password should be at least of 7 chars" })
    .max(26, { message: "Password should be max at 26 chars" }),
});
const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email Address!" })
    .min(5, { message: "Email should be at least of 3 chars" })
    .max(255, { message: "Email should be max at 8 chars" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password should be at least of 7 chars" })
    .max(26, { message: "Password should be max at 26 chars" }),
});

module.exports = { signupSchema, loginSchema };
