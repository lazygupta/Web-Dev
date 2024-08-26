const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost:27017/mongolearn`)

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})

module.exports = mongoose.model("user", userSchema) // The model will created with the name users ( Plural form)