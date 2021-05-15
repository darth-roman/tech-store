import { mediumorchid } from 'color-name'
import mongoose from 'mongoose'

const {Schema} = mongoose

const MerchantSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String, 
    password: String,
    hashedPassword: String,
    company: String
})

Merchant = mongoose.model('Merchant', MerchantSchema)
module.exports = Merchant