const express = require('express')
const route = express.Router();
const {adminLogin, adminRegister} = require('../controllers/adminController')
const {verify} = require('../utils/verifyToken')

route.get('/', (req, res)=>{
    res.json({msg: "admin route home"})
})

route.post('/login', adminLogin)

route.post('/register', adminRegister)

route.use('/category',verify, require('./categories'))
//route.use('/post', require('./posts'))

module.exports = route