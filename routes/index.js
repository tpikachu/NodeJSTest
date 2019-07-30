const express = require("express");
const router = new express.Router();

// For the test
router.get("/ping", (req, res) => res.send("pong"));
router.get("/", (req, res) => res.send("Server is listening at 3000 port"));
module.exports = router;
