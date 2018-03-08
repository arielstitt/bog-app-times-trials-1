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
const db = mongoose.connection
// Log when your database connects (a.k.a 'open') and when it errors

db.on('error', (err)=>{
    console.log(err)
})
db.on('open', ()=>{
    console.log("Connected to MongoDB")
})

// Inject middleware (like body-parser) using app.use
//middleware allows things to talk to each other
app.use(logger('dev'))
//logger gives you better error messages
app.use(bodyParser, json())
//bodyParser takes in requests from the DB and traslates them into JSON

// Set up a get request that sends back "Hello World"

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

// Tell your app to listen on port 3001, and console log when it connects.
const PORT = process.env.PORT || 30001

//log that the port is up and running on the port

app.listen(PORT, ()=>{
    console.log('App is up and running on port' + PORT)
})