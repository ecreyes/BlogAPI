const express = require('express');
const app = express();
const { createUser, login } = require('../services/authService');

app.post('/signup', async (req, res) => {
  try {
    let body = req.body;
    let response = await createUser(body.username, body.email, body.password);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error);
  }
});

app.post('/signin', async (req, res) => {
  try {
    let body = req.body;
    let response = await login(body.email, body.password);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error);
  }
});


module.exports = app;