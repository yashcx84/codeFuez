const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(URI);
    console.log("Database Connection Successful!");
  } catch (error) {
    console.log(error, "Database Connection Error");
    process.exit(0);
  }
};

module.exports = connectDB;
