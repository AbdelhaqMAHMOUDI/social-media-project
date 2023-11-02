const router = require("express").Router();
const authController = require("../controllers/auth.controller");

router.post("/register", authController.signUp); // signUp a definir dans controllers // video 32min47

module.exports = router;
