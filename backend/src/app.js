const express = require('express');
const app = express();

const actions = require('./api/actions');
const names = require('./api/names');
const topics = require('./api/topics');

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

app.get('/random-items', (req, res) => {
    const randomAction = getRandomItem(actions);
    const randomName = getRandomItem(names);
    const randomTopic = getRandomItem(topics);

    res.json({
        action: randomAction,
        name: randomName,
        topic: randomTopic
    });
});

module.exports = app;