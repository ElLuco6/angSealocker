//import express from 'express';
const express = require('express');
const app = express();
const path = require('path');



const mongoose = require('mongoose');
//const bodyParser = require('body-parser');


//const partnaireRoutes = require('./routes/partnaire');
const boardRoutes = require('./routes/board');



const indexRoute = require('./index.js')


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  

//app.use('/', express.static(path.join(__dirname, 'app', 'public')));


//Route
app.use( "/", indexRoute);
//app.use( "/partnaire", partnaireRoutes);
app.use( "/board", boardRoutes);

module.exports = app;
