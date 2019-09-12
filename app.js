const express = require("express");
require("./db/mongoose");
const vendorRouter = require("./routers/vendor");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/vendors", vendorRouter);

/*Adds the react production build to serve react requests*/
app.use(express.static(path.join(__dirname, "frontend/build")));
/*React root*/
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "frontend/build/index.html"));
});

module.exports = app;
