const express = require('express')


//REST Object
const app=express()

//create rest api
app.get('/', (req, res)=>{
    res.send({
        message:'welcome to mern'
    })
})
const PORT=8080
app.listen(PORT, ()=>{
    console.log("Server running on: ", `http://localhost:8080`)
})