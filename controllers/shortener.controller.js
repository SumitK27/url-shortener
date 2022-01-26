const mongoose = require("mongoose");
const ShortUrl = require("../models/shortUrl");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

class Shortener {
    async getHome(req, res) {
        const shortUrls = await ShortUrl.find();
        res.render("index", { shortUrls: shortUrls });
    }

    async shortUrl(req, res) {
        await ShortUrl.create({ full: req.body.fullUrl });
        res.redirect("/");
    }

    async navigate(req, res) {
        const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });

        if (shortUrl == null) {
            return res.status(404);
        }

        shortUrl.clicks++;
        shortUrl.save();

        res.redirect(shortUrl.full);
    }
}

module.exports = Shortener;
