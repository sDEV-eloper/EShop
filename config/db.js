import mongoose from 'mongoose'

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB database ${conn.connection.host}`.bgMagenta.white)
    }
    catch(err){
console.log(err.bgRed.white)
    }
}
export default connectDB