import express from "express"
import dotenv from 'dotenv'

//configure env
dotenv.config()

const app=express()
//create rest api
app.get('/', (req, res)=>{
    res.send({
        message:'welcome to mern'
    })
})
const PORT=process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log("Server running on: ", `http://localhost:8080`)
})