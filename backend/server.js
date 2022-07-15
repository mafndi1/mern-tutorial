const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get('/api/goals',(req,res)=>{
    res.status(200).json({message: 'Get Goals'})
})

app.use('/api/goals',require('./routes/goalRoutes.js'))
