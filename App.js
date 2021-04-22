const express = require('express')
const App = express()

const PORT = process.env.PORT || 8081





App.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
})