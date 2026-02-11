require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("combined"));

app.get("/healthcheck", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/v1/students", require("./routes/studentRoutes"));

module.exports = app;
