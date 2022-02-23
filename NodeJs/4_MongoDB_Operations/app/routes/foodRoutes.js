const express = require('express');
const foodModel = require('../models/food');
const app = express();

// Reading All Foods
app.get("/foods", (req, res) => {

    foodModel.find({}).then((foods) => {
        res.send(foods);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// Create Food
app.post("/foods/create", (req, res) => {
    const { name, calories } = req.body;
    const foodObj = { name: name, calories: calories }

    const food = new foodModel(foodObj);
    food.save().then((food) => {
        console.log(food);
        res.send(food);
    }).catch((err) => {
        res.send(err);
    });
});

// Find By Id
app.get('/foods/:id', (req, res) => {
    foodModel.findById(req.params.id).then((food) => {
        console.log(food);
        res.send(food);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// Update the Existing food by id
app.patch("/foods/update/:id", (req, res) => {
    foodModel.findByIdAndUpdate(req.params.id, req.body).then((food) => {
        console.log(food);
        res.send(food);
    }).catch((err) => {
        res.status(500).send(err);
    });
})

module.exports = app;