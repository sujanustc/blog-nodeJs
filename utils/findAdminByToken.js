const Admin = require('../models/').admins

module.exports= function(req, res){
    const result = await Admin.findOne({
        where: {
            token: req.token
        }

    })
    return res.send(result)
}