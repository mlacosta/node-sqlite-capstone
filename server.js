const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler =  require('errorhandler');
const apiRouter = require('../X-PRESS capstone/api/api');


const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorhandler())
  }

app.use('/api',apiRouter);

app.listen(PORT,()=>{
    console.log(`Listening HERE:${PORT}`)
})

module.exports = app;