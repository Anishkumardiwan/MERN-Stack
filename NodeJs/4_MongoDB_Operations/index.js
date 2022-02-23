const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const foodRoutes = require('./app/routes/foodRoutes');
const app = express();

// Connect DataBase
mongoose.connect('mongodb://localhost:27017/foodDB');
let db = mongoose.connection;
db.on('error', () => {
    console.log('DB unable to connect');
});
db.on('open', () => {
    console.log("connection successful");
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(foodRoutes);

const myPort = process.env.PORT || 3000;
app.listen(myPort, () => {
    console.log(`server is running: http://localhost:${myPort}/`,);
});









