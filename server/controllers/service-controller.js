const Service = require("../models/service-model");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(404).json({ msg: "Service not found!" });
      return;
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.error(`Services: ${error}`);
  }
};

module.exports = services;
