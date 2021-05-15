import mongoose from 'mongoose'

const {Schema} = mongoose

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


const Checkout = mongoose.model('CheckOut', CheckOutSchema)
export default Checkout