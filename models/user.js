const mongoose = require('mongoose')

const Schema = mongoose.Schema;
//const oAuthTypes = ['google', 'facebook']

const UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, default: ''},
    email: {type:String, default: ''},
    password: {type: String, default:''},
    provider: {type: String, default:''},
})


module.exports = mongoose.model('User', UserSchema);

