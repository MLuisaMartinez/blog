const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../schemas/userSchema')
const res = require('express/lib/response')
const verifyJWT = require('../middleware/jwt')

const authRouter = express.Router()


authRouter.post('/register', async(req, res)=>{
    let user = req.body
    let password = user.password
    let salt = Number(process.env.SALT)

    //todo datavalidation middleware
    if (!password || !user.username){
        res.status(400).json({message: "Please have a username and password"})
    }

    //make helper
    let hashedPassword = await bcrypt.hash(password, salt)
    user.password = hashedPassword
    

    //make model function

    User.create(user, (error, results)=>{
        if(error){
            res.status(400).json({message: error.message})
        }
        if(result === undefined || result === null){
            req.status(400).json({message: "Please make a unique user"})
        }
        res.status(200).json({data: results})
    })

    })
   

authRouter.post('/login', (req, res)=>{
    let username = req.body.username
    let password = req.body.password

    //middleware goes here
    if (!password || !username){
        res.status(400).json({message: "Please have a username and password"})

    }

    User.findOne({username: username}, (error, result)=>{
        if(error){
            res.status(400).json({message: error.message})
        }
        if(result === null || result === undefined){
            req.status(404).json({message: "User not found"})
        }
        bcrypt.compare(passsword, results.password, (error, matching)=>{
            if(matching === false){
                res.status(403).json({mesage: "Either username or password is incorrect"})
            }
            let token = jwt.sign(username, process.env.JWT_SECRET)
            res.setHeader('Authorization', token)
            res.status(200).json({data: results})
        })
    })
authRouter.post('/login', async(req, res)=>{
})
    res.status(200).json({message: "Login Route"})
})

module.exports = authRouter

//Import BCRYPT

//Geet Req Body & Extract pwd

//Encrypt pws & return it to variable

// reassign pwd to NEW hashed pwd

//add user to database

//1- import jsonwebtoken
//2- create token after successful bycrypt comparison
//3- asign token as authorization header
//4- send data

// const port = process.env.PORT || 5000