require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require("./router/auth-router");
const connectDB = require("./utils/db");
const cors = require("cors");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
  origin: "https://codefuez-client.onrender.com/",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
// json middleware parsing
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// Error Middleware
app.use(errorMiddleware);

const PORT = 4000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}..`);
  });
});
