const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler =  require('errorhandler');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorhandler())
  }

app.listen(PORT,()=>{
    console.log(`Listening HERE:${PORT}`)
})