const userRouter = require('express').Router()

const { getAllUsers, deleteUser, createUser, update, getSingleUserInfo } = require('../controllers/userController')
//const { updateInfo } = require('../models/userModel')

userRouter.get('/users', getAllUsers)

userRouter.get('/users/:id', getSingleUserInfo)

 userRouter.post('/users', createUser)

// userRouter.put('/user/:id', update)

 userRouter.delete('/users/:id', deleteUser)


module.exports = userRouter;