const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://abrahamrichard:richy599@cluster0.8afhjv3.mongodb.net/")
const todoSchema = mongoose.Schema({
    title:String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}