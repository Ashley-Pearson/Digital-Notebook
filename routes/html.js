const express = require('express');
//Import routers
const htmlRouter =require('./api');

const app = express();

app.use('/api', apiRouter);

module.exports = app;