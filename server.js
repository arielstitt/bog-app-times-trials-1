require('dotenv').config()
//require express
const express = require('express')
//require body barser
const bodyParser = require('body-parser')
//require mongoose
const mongoose = require('mongoose')
//require morgan 
const logger = require('morgan')

//setting the instance of the server to the app itself
const app = express()

// Connect to the Mongoose database at process.env.MONGODB_URI
mongoose.connect(process.env.MONGODB_URI)
const connection = mongoose.connection

Log when your database connects (a.k.a 'open') and when it errors

