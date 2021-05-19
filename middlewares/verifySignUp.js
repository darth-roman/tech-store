import User from '../models/user'
//import Article from '../models/article'
//import Merchant from '../models/merchant'
//import send from 'send'


checkDuplicateUsernameOrEmail = (req, res, next) =>{
    User.findOne({
        username: req.params.username
    }).exec((err, user) =>{
        if(err){
            res.status(500).send({message: err})
            return;
        }

        if(user){
            res.status(400).send({message: "Failed! username is already in use!"})
            return;
        }
    })


    User.findOne({
        email: req.params.email
    }).exec((err, user)=>{
        if(err){
            res.status(500).send({message: err})
            return;
        }

        if(user){
            res.status(400).send({message: "Failed! Email already in use"})
            return;
        }
    })
}

const verifySignUp = {
    checkDuplicateUsernameOrEmail
}

export default verifySignUp