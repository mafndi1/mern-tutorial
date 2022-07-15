const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')


// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async(req,res) => {
    const goals = await Goal.find()
const getGoals = asyncHandler (async(req, res)=>{
    const goals = await Goal.find({ user: req.user.id })
    res.status(200).json(goals)
})

// @desc    Set Goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async(req,res) => {
const setGoal = asyncHandler (async(req, res)=>{
    if(!req.body.text){
        res.status(400)
         throw new Error('Please add a text field')
        }

        const goal = await Goal.create({
            text: req.body.text,


        })

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id, 
    })

    res.status(200).json(goal)
})

})   
// @desc    Update Goals
// @route   PUT /api/goals:id
// @route   PUT /api/goals
// @access  Private
const updateGoal = asyncHandler(async(req,res) => {
const updateGoal =asyncHandler (async(req, res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
@@ -43,9 +42,9 @@ const updateGoal = asyncHandler(async(req,res) => {
    res.status(200).json(updateGoal)
})
// @desc    Delete Goals
// @route   GET /api/goals:id
// @route   delete /api/goals
// @access  Private
const deleteGoal = asyncHandler(async(req,res) => {
const deleteGoal = asyncHandler (async(req, res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
@@ -56,11 +55,10 @@ const deleteGoal = asyncHandler(async(req,res) => {


    res.status(200).json({id: req.params.id})
})


})
module.exports = {
    getGoals,
    getGoals,  
    setGoal,
    updateGoal,
    deleteGoal,
}
