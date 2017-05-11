/**
 * Created by siva on 4/27/2017.
 */
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Entries = require('../models/entry');

router.post('/values', (req, res, next)=>{
    const date = req.body.Date;
    const fid = req.body.FranchiseID;
    Entries.getEntryByFranchiseID(date, fid, (err,docs)=>{
        res.json(docs);
        console.log('posted');
    });
});

module.exports = router;