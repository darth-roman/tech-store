//const User = require('./models/user.js')
//const reqParser = require('parse-request')


import express from 'express'
import mongoose from 'mongoose'
import User from './models/user.js'
import CheckOut from './models/checkout.js'


const App = express()
const PORT = process.env.PORT || 8081

mongoose.connect('mongodb://localhost/edl', {useNewUrlParser: true, useUnifiedTopology: true});

App.set('view engine', 'ejs');


App.use(express.static('public'))

// App.use(bodyParser.json())
// App.use(bodyParser.urlencoded({extended: false}))
App.use(express.json())
App.use(express.urlencoded({extended: false}))


App.get('/', (req, res)=>{
    res.render('index')
})

App.get('/products', (req, res)=>{
    res.render('products/index')
})

// axios.post('/add-user',{
//     name: "Chouchane Louai",
//     email: "chouchane@gmail.com",
//     password: "123456789",
//     provider: "Louai Inc."
// })
// .then(response => console.log("Response"+response))
// .catch(err=>console.log("Error!"+err))

App.get('/add-user', (req, res)=>{
    console.log("Called");
    const user1 = new User({
        _id: mongoose.Types.ObjectId(),
        name: "Aron Chouchane",
        email: "aron.chouchane@gmail.com",
        password: "123456789",
        provider: "Chouchane Inc."
    })
    .save()
})
App.get('/all-users', (req, res)=>{
    console.log("Called find");
    User.find({}, (err, data)=>{
        if (err) console.log(err);
        console.log(data);
    })
})

App.get('/find-user/:id', (req, res)=>{
    console.log("Called find");
    User.findOne({_id:req.params.id}, (err, data)=>{
        if (err) console.log(err);
        console.log(data);
    }).exec()
})

App.get('/add-checkout', (req, res)=>{
    console.log('Checking out');
    const ckot = new Checkout({
        _id: mongoose.Types.ObjectId(),
        user: "608c3ec00e522ecdf43dc956"
    })
    .save()
})

App.get('/all-checkouts', (req, res)=>{
    console.log('Checking them ALL out');
    Checkout.find({}, (err, data)=>{
        if(err) console.log(err);
        console.log(data);
    })
})


App.get('/get-checkout/:id', (req, res)=>{
    console.log('Finding out');
    Checkout.findOne({_id:req.params.id}, (err, data)=>{
        if(err) console.log(err);
        console.log(data);
    }).exec()
})

App.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
})