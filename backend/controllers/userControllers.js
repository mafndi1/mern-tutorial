// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = (req,res) => {
    res.json({message: 'Register User'})
}

// @desc    Login user
// @route   POST /api/users
// @access  Public
const loginUser = (req,res) => {
    res.json({message: 'Login User'})
}

// @desc    Register user
// @route   POST /api/users
// @access  Public
const getMe = (req,res) => {
    res.json({message: 'User Data Display'})
}



module.exports = { 
    registerUser,
    loginUser,
    getMe
 } 