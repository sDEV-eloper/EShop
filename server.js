import express from "express"
import dotenv from 'dotenv'
import morgan from 'morgan'
import colors from 'colors'
import connectDB from "./config/db.js"
import authRoutes from  './routes/authRoute.js'

//configure env
dotenv.config()
connectDB()

const app=express()
//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes)


//create rest api
app.get('/', (req, res)=>{
    res.send({
        message:'<h1>welcome to mern</h1>'
    })
})
const PORT=process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log("Server running on: ", `http://localhost:8080`)
})
