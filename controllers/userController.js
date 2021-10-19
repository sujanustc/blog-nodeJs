const User = require('../models/').users
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userRegister = async (req, res) => {
    const { firstName, lastName, email, password, address, phoneNo, image } = req.query;
    if (!email || !password) {
        return res.json({ status: false, message: "missing field" })
    }
    const result = await User.findOne({
        where: {
            email: email
        }

    })
    if (result) return res.json({ status: false, message: "User already registered with this email" });

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)

    const createdUser = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashPassword,
        address: address,
        phoneNo: phoneNo,
        image: image

    }).catch((err) => {
        console.log(err);
    })
    res.json(createdUser);
    //res.json({msg: "register successfull"})
}

const userLogin = async (req, res) => {
    const { email, password } = req.query;

    if (!email || !password) {
        return res.json({ status: false, message: "missing field" })
    }

    const result = await User.findOne({
        where: {
            email: email
        }
    })
    if (!result) return res.json({ status: false, message: "User not found with this email" });

    const validPass = await bcrypt.compare(password, result.password);
    if (!validPass) return res.status(400).json({ status: false, message: "invalid password" })
    //if(result.jwt) return res.status(400).json({status:false, message: "User already Logged in"})

    const dataForJsonWebToken = {
        id: result.id,
        name: result.name,
        time: new Date()
    }


    // create a json web token || without giving expiry time  --> if needed then give . No problem
    const jsontoken = jwt.sign(dataForJsonWebToken, process.env.TOKEN_SECRET,{});

    const user = {
        id: result.id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        address: result.address,
        phoneNo: result.phoneNo,
        image: result.image,
        score: result.score,
        status: result.status
    }
    await User.update({ jwt: jsontoken }, {
        where: {
          id:result.id
        }
      });
    res.json({ status: true, message: "Successfully login", user, accessToken: jsontoken, })
}

// const response = (res, code, result) => {
//     return res.status(code).json(result)
// }

module.exports = {
    userLogin,
    userRegister
}