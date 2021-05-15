

import mongoose from 'mongoose'
import {User} from './user.js'

const {Schema} = mongoose

const ArticleSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type:String, default:''},
    categories: [String],
    waitQueue: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    price: {type: Number, default: 0},
    quantityInStock:{type: Number, default: 0},
    isSoldOut:{type: Boolean, default: false} 
})

Article = mongoose.model('Article', ArticleSchema)
export {Article}
