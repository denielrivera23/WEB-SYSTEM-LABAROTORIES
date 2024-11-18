required('dotenv').config()


const express = require('express')
const mongoose = require ('mongoose')
const workoutRoutes = require('./routes/workouts')

const app = express()


app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/apiworkouts',workoutRoutes)

mongoose.connect(process.env.MONGO_UI)
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log('listening on port 4000d', process.nextTick.PORT)
    })
    
})
.catch((error)=>{
    console.log(error)
})

app.listen(process.env.PORT, () => {
    console.log('listening on port 4000d', process.nextTick.PORT)
})

