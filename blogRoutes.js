const express = require('express')


const User = require('../schemas/userSchema')


const blogRouter = express.Router()


blogRouter.post('/register', async(req, res)=>{
    
    
    res.status(200).json({message: "Login Route"})

})
module.exports = blogRouter
