/**
 * Created by siva on 5/5/2017.
 */
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Entries = require('../models/entry');

router.post('/partyvalues', (req, res, next)=>{
    const week = req.body.ChallengeWeek;

    Entries.getPartyByDate(week, (err,docs) =>{
        res.json(docs);
        console.log('posted party');
    });
});

module.exports = router;