const express = require('express')
const router = express.Router()
const { getGoals } = require('../controllers/goalController')


router.get('/', getGoals)

router.get('/',(req,res)=>{
res.status(200).json({message: 'Get Goals'})
})

router.post('/',(req,res)=>{
    res.status(200).json({message: 'Set Goal'})
})

router.put('/:id',(req,res)=>{
    res.status(200).json({message: `Update Goal ${req.params.id}`})
})


router.delete('/:id',(req,res)=>{
res.status(200).json({message: `Delete Goal ${req.params.id}`})
})

const { 
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
 } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)


module.exports = router 