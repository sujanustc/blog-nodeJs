const jwt = require('jsonwebtoken')

const verify = async (req, res, next)=> {
    const token = req.query.token;
    if(!token) return res.status(401).send(("access denied"));
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next()
    }
    catch(err){
        res.status(400).send('invalid token')
    }
}


module.exports = {
    verify
}
