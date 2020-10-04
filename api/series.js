const express = require('express');
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database(process.env.TEST_DATABASE || '../database.sqlite');

seriesRouter.get('/',(req,res,next)=>{
    const sql = `SELECT * FROM Series`;
    db.all(sql,(err,series)=>{
        if(err){
            next(err);
        }else{
            res.status(200).json({series:series});
        }
    })
})


const seriesRouter = express.Router();

module.exports = seriesRouter;