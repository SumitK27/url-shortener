require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const baseRouter = require("./routes/base");
app.use("/", baseRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
