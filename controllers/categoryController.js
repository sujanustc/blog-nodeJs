const Category = require('../models/').categories
const Admin = require('../models/').admins
const jwt = require('jsonwebtoken')
//const utils = require('../utils')

const addCategory = async (req, res) => {
    const { name, token, status} = req.query;
    let slug = name.toLowerCase();
    slug = slug.replace(/[^a-zA-Z ]/g, "");
    slug = slug.replace(/[ ]/g, "-");
    console.log(slug);

    if (!name) return res.json({ status: false, message: "missing field" });

    const result = await Category.findOne({
        where: {
            name: name,
        }
    }).catch((err) => {
        console.log(err);
    })
    if (result) return res.json({ status: false, message: "This Category already Exist" })

    const findAdminByToken = await Admin.findOne({
        where:{
            jwt: token
        }
    })
    //console.log(findAdminByToken);

    const createdCategory = await Category.create({
        name: name,
        slag: slug,
        status: status,
        adminId: findAdminByToken.id
    }).catch((err) => {
        console.log(err);
    })

    res.json(createdCategory)

}

module.exports={
    addCategory
}