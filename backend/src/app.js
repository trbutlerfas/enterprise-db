const express = require('express');
require('./db/mongoose');
const vendorRouter = require('./routers/vendor');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/vendors', vendorRouter);

module.exports = app;
