const express = require("express");
const gameController = require("../controllers/gameController");
const router = express.Router();

router.get("/api/games/", gameController.getGame);

module.exports = router;
