const express = require('express')
// don't forget to merge params
const router = express.Router({ mergeParams: true })
//the code below is how we are requiring out model
const Creature =  require('../db/schema')
//controllers are the middle man that grabs the information from the models and routes the data to the views

// Get All Creatures ==== GET ====


// Get One Creature by Id ====GET =====


// Create New Creature ==== POST ====


// Update A Creature ==== PATCH ====


// Delete A Creature ==== DELETE ====
