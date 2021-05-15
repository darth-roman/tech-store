import mongoose from 'mongoose'

const {Schema} = mongoose

const CategorySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    categoryName: String
})


Category = mongoose.model('Category', CategorySchema)
export {Category}