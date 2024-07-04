
const express = require('express')
const app = express()
const mongoose = require('mongoose')


require('dotenv').config()
const port =process.env.PORT || 4000

// mongodb connection

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('DB connected Succesfully');
}).catch((err)=>{
    console.log(err);
})

// server starting

app.listen(port,()=>{
    console.log(`port listening on port:${port}`);
})