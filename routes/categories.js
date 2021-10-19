const express = require('express')
const route = express.Router();
const {addCategory} = require('../controllers/categoryController')

route.post('/addCategory', addCategory)

module.exports = route
