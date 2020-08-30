const mongoose = require('mongoose');  
const { Schema, model } = mongoose;

let TodoSchema = new Schema({
    content: String,
    finished: Boolean
})

module.exports = model('Todo', TodoSchema);