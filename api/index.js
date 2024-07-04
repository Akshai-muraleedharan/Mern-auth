
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRouter from './router/user.route.js'
import AuthRouter from './router/auth.route.js'

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


app.use(express.json())
app.use('/api/user',UserRouter)
app.use('/api/auth',AuthRouter)


// server starting
app.listen(port,()=>{
    console.log(`port listening on port:${port}`);
})