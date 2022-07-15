const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')


// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Get Goals'})
    const goals = await Goal.find()
    res.status(200).json(goals)
})
// @desc    Set Goals
// @route   POST /api/goals
@@ -16,20 +18,44 @@ const setGoal = asyncHandler(async(req,res) => {
         throw new Error('Please add a text field')
        }

        const goal = await Goal.create({
            text: req.body.text,


        })

    res.status(200).json({message: 'Set Goals'})

    res.status(200).json(goal)
})
// @desc    Update Goals
// @route   GET /api/goals:id
// @route   PUT /api/goals:id
// @access  Private
const updateGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Update Goals ${req.params.id}'})
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error ('Goal not found')
    }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})


    res.status(200).json(updateGoal)
})
// @desc    Delete Goals
// @route   GET /api/goals:id
// @access  Private
const deleteGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Delete Goals ${req.params.id}'})
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error ('Goal not found')
    }

    await goal.remove()


    res.status(200).json({id: req.params.id})
})

