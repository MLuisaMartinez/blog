const jwt = require('jsonwebtoken')

function verifyJWT(req, res, next){
    let token = req.get('Authorization')

    if(token === null || token === undefined){
        res.status(403).json({message: "You Must Be logged in"})
    }
    jwt.verify(token, process.env.JWT_SECRET, (error, result)=>{
        if(error){
            res.status(400).json({message:"You're Done"})
        }
        if(result === false){
            
        res.json({message: "You're Logged In"})
    }
    next()
})
}
module.exports = verifyJWT