const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CategorySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    categoryName: String
})

module.exports = mongoose.model('Category', CategorySchema)