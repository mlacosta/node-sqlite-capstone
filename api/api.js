const express = require('express');
const apiRouter = express.Router();
const artistsRouter = require('./artist');
const seriesRouter = require('./series');

apiRouter.use('/artist',artistsRouter);
apiRouter.use('/series',seriesRouter);

module.exports = apiRouter;