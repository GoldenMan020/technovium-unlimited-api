const express = require("express");
const gameController = require("../controllers/gamesController");
const router = express.Router();

router.get("/api/games", gameController.getGames);

module.exports = router;
