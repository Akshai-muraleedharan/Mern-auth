
import express from 'express'
import mongoose from 'mongoose'
import UserRouter from './router/user.route.js'
import dotenv from 'dotenv'


const app = express()
dotenv.config()

const port =process.env.PORT || 4000



// mongodb connection
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('DB connected Succesfully');
}).catch((err)=>{
    console.log(err);
})



app.use('/api/user',UserRouter)



// server starting
app.listen(port,()=>{
    console.log(`port listening on port:${port}`);
})