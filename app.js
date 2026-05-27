const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const qaRoutes = require("./routes/qa");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ status: "API Revenue OK" });
});

app.use("/api/qa", qaRoutes);

module.exports = app;
