const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDb = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

connectDb()
const app = express()

app.use(express.json())