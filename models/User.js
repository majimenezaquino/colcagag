const mongoose = require("mongoose")

const schema = mongoose.Schema({
    user: String,
    pass: String,
    comment1: String,
    comment2: String,
})

module.exports = mongoose.model("User", schema)