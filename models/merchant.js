const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const MerchantSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String, 
    password: String,
    hashedPassword: String,
    company: String
})

module.exports = mongoose.model('Merchant', MerchantSchema)