const express = require('express');
const fileRouter = express.Router();
const {uploadFile} = require('./../controllers/file.controller');

fileRouter.route('/')
    .post(uploadFile);

module.exports = fileRouter;