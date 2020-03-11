const express = require('express');
const app = express();
const { verifyToken } = require('../middlewares/auth');
const { uploadAvatar } = require('../services/storeService');

app.post('/uploadAvatar',verifyToken, async (req, res) => {
  try {
    //console.log(req.user);
    let response = await uploadAvatar(req.files);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = app;