const express = require('express');
const apiRouter = express.Router();
const artistsRouter = require('./artist');


apiRouter.use('/artist',artistsRouter);

module.exports = apiRouter;