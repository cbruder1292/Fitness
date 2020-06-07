const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

const db = require("./models");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", { useNewUrlParser: true });

require("./routes/APIroutes")(app);
require("./routes/HTMLroutes")(app);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});