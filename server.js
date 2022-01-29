const express = require('express')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const dotenv = require('dotenv')

//Security-Add Morgan
const morgan = require('morgan')

//Local Reuirements
const morgan = require('morgan')
const mongooseConnect = require('./config')
const jwt = require('jsonwebtoken')
const verifyJWT = require('.middleware/jwt')
const authRouter = require('./routes/authRoutes')
const blogRouter = require('./routes/blogRoutes')

dotenv.config()

const app = express()
const port = process.env.PORT || 5000


app.use(bodyParser.json())
app.use(morgan('dev'))

//Routes- Go Here
app.use('/auth',authRoute)
app.use('/blog',blogRoute)

app.get('/', (req, res)=>{
    res.status(200).json({message: "API IS UP"})
})

app.listen(port, ()=>{
    mongooseConnect()
    console.log('Server is listening at ${port}');
})



//Error Handling

//Debugging

//Postman