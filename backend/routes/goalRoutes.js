const express = require('express')
const router = express.Router()
const { 
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
 } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal } = require('../controllers/goalController')


const {protect} = require('../middleware/authMiddleware')

router.route('/').get( protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal) 



module.exports = router 
