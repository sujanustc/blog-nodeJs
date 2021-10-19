const express = require('express')
const route = express.Router();


route.use('/admin', require('./admins'))
route.use('/user', require('./users'))


module.exports = route