const express = require("express");
const { protectRoute } = require("../middleware/auth.middleware");
const { getPreferences, updatePreferences } = require("../controllers/prefernces.controller");

const router = express.Router();


router.get("/preferences", protectRoute, getPreferences);
router.put("/preferences", protectRoute, updatePreferences);

module.exports = router;