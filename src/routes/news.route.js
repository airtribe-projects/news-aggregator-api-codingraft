const express = require("express");
const { protectRoute } = require("../middleware/auth.middleware");
const { fetchNews } = require("../controllers/news.controller");

const router = express.Router();

router.get("/news", protectRoute, fetchNews);

module.exports = router;
