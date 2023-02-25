const express = require('express');

const htmlRouter =require('./api');

const app = express();

app.use('/api', apiRouter);

module.exports = app;