import express from 'express'
import mongoose from 'mongoose'
import session from 'express-session'
import dotenv from 'dotenv'
import cors from 'cors'
//import fetch from 'node-fetch'

import User from './models/user.js'
//import CheckOut from './models/checkout.js'


const App = express()
const PORT = process.env.PORT || 8081



dotenv.config()
mongoose.connect('mongodb://localhost/edl', {useNewUrlParser: true, useUnifiedTopology: true});

App.set('view engine', 'ejs');


App.use(express.static('public'))
App.use(express.json())
App.use(express.urlencoded({extended: false}))
App.use(session({
    secret:"mamamiamarcelo",
    proxy: true,
    resave: true,
    saveUninitialized:true,
    cookie:{
        maxAge: 60000
    }
}))
App.use(cors({origin: `http://localhost:${PORT}`}))

App.get('/products', (req, res)=>{
    res.render('products/index')
})

App.get('/', (req, res)=>{
    res.render('index')
})

App.post('/signup', async (req, res)=>{
    const sess = req.session
    const user1 = await new User({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        provider: "Chouchane Inc."
    })
    .save()

    sess.user = user1
    res.locals.user = sess.user
    console.log(sess);
    res.render('redirects/_profile',{session: sess})
})

App.post('/signin', async (req, res)=>{
    const email = req.body.email
    const password = req.body.password
    const sess = req.session
    await User.findOne({email:email}).exec((err, result)=>{
        if(err) return err
        if(result.email===email && result.password===password){
            req.session.user = result
            res.locals = sess.user
            console.log(sess);
            res.render("redirects/_profile",{session: sess })
        }else{
            res.send("User Not Found")
    }
    })
    
})

App.get('/logout', (req, res)=>{
    req.session.destroy()
    res.redirect('/')
})



App.get('/all-users', (req, res)=>{
    console.log("Called find");
    User.find({}, (err, data)=>{
        if (err) console.log(err);
        console.log(data);
    })
})

App.get('/profile', (req, res)=>{
    if(req.session.user){
        res.render('redirects/_profile', {session: req.session})
    }else{
        res.redirect('/')
    }
})

App.get('/user/:username', (req, res)=>{
    // console.log("Called find");
    // User.findOne({_id:req.session.ident}, (err, data)=>{
    //     if (err) console.log(err);
    //     console.log(`${data} => ${req.session.ident}`);
    // }).exec()

    res.render('redirects/_profile.ejs')
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