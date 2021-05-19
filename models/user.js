import mongoose from 'mongoose'

const {Schema} = mongoose;
//const oAuthTypes = ['google', 'facebook']

const UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, default: ''},
    email: {type:String, default: ''},
    username: {type: String, default: ''},
    password: {type: String, default:''},
    provider: {type: String, default:''},
})

const User =  mongoose.model('User', UserSchema);
export default User
