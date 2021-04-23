const express = require('express')
const App = express()
const PORT = process.env.PORT || 8081

App.set('view engine', 'ejs');


App.use(express.static('public'))


App.get('/', (req, res)=>{
    res.render('index')
})



App.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
})