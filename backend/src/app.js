const express = require("express");
require("./db/mongoose");
const vendorRouter = require("./routers/vendor");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/vendors", vendorRouter);
app.use("/", express.static(path.join(__dirname, "../frontend/build")));

module.exports = app;
