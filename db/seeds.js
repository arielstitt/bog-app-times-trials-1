require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
//example data

const Creature = require('./schema')



const luke = new Creature({
    name: 'Luke', 
    description: 'Jedi'
})

const mars = new Creature({
    name: 'Martia',
    description: "Just a little red"
  })



// First we remove all the creatures

// Creature.remove({})

// //then we save our new creature
// .then(()=>{
//     save()
// }).then(()=>{
//     console.save('Successfully Save')
// }).then(()=> mongoose.connection.close())

Creature.remove({})
  .then(() => luke.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())