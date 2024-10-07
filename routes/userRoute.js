const express = require('express');

const route = express.Router();

const { create , fetch} = require('../controller/userController.js');

// Define your routes here
route.post('/create', create);
route.get('/fetch', fetch);

// Use CommonJS module exports for Node.js
module.exports = route;
