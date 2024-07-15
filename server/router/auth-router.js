const express = require("express");
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
const authcontroller = require("../controllers/auth-controller");
const { signupSchema, loginSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupSchema), authcontroller.register);
router.route("/login").post(validate(loginSchema), authcontroller.login);
router.route("/user").get(authMiddleware, authcontroller.user);

// exporting the module
module.exports = router;
