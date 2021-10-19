const express = require('express')
const route = express.Router();
const { userLogin, userRegister } = require('../controllers/userController')

route.get('/', (req, res) => {
    res.json({ msg: "user route home" })
})

route.post('/login', userLogin);
route.post('/register', userRegister);


module.exports = route