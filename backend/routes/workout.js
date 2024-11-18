const express = require('express')
const {
    createWorkout,
    getWokouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutcontrollers')
const router = express.Router()

router.get('/', getWokouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)
   
   


router.delete('/id', deleteWorkout)

router.patch('/id', updateWorkout)

module.exports = router