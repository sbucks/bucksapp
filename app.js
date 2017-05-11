/**
 * Created by siva on 4/27/2017.
 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const entries = require('./routes/entries');
const partyentries = require('./routes/partyentries');
const config = require('./config/database');

const app = express();
const port = 3000;

//connecting to database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected', function () {
    console.log('connected to database '+config.database);
});

//on error
mongoose.connection.on('error', function (err) {
    console.log('database error'+err);
});

app.use(cors());

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());

app.use('/entries',entries);
app.use('/entries',partyentries);

app.get('/', (req, res)=>{
    res.send('invalid entry point');
    console.log('invalid entry point')
});

app.listen(port, ()=>{
    console.log('server started on port '+port);
});