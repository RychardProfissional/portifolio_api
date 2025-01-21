const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routers
const { commentsRouter, resumeRouter } = require('./routes.js');

app.use('/comments', commentsRouter);
app.use('/resume', resumeRouter);

module.exports = app