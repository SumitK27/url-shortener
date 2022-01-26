const express = require("express");
const router = express.Router();
const ShortenerClass = require("../controllers/shortener.controller");

const Shortener = new ShortenerClass();

router.get("/", Shortener.getHome);

router.post("/shortUrl", Shortener.shortUrl);

router.get("/:shortUrl", Shortener.navigate);

module.exports = router;
