require("../models/db");
const Game = require("../models/Games");

exports.getGames = async (req, res) => {
    try {
        const games = await Game.find({});
        res.json(games);
    } catch (err) {
        res.status(400).json({message: err});
    }
};
