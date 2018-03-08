const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CreatureSchema = new Schema({
    name: String,
    description: String
})


//this created the model inside of the schema
//Models holds the data
const Creature = mongoose.model('Creature', CreatureSchema)

//I forgot to export the schema! 
module.exports = Creature
