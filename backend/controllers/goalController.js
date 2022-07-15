const asyncHandler = require('express-async-handler')


// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req,res) => {
const getGoals = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Get Goals'})
}
})
// @desc    Set Goals
// @route   POST /api/goals
// @access  Private
const setGoal = (req,res) => {
const setGoal = asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400)
         throw new Error('Please add a text field')
        }


    res.status(200).json({message: 'Set Goals'})
}
})
// @desc    Update Goals
// @route   GET /api/goals:id
// @access  Private
const updateGoal = (req,res) => {
const updateGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Update Goals ${req.params.id}'})
}
})
// @desc    Delete Goals
// @route   GET /api/goals:id
// @access  Private
const deleteGoal = (req,res) => {
const deleteGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Delete Goals ${req.params.id}'})
}
})


module.exports = {