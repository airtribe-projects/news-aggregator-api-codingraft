const express = require("express");
const { login, signup, logout } = require("../controllers/user.controller");
const { protectRoute } = require("../middleware/auth.middleware");


const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);



module.exports = router;