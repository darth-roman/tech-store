const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const CheckOutSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    priceToPay: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    listOfArticles: [{
        type: Schema.Types.ObjectId,
        ref: 'Article'
    }]
})

module.exports = mongoose.model('CheckOut', CheckOutSchema)