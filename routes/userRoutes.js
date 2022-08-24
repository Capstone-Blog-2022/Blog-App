const userRouter = require('express').Router()

const { getAllUsers, deleteUser, createUser, update, getSingleUserInfo } = require('../controllers/userController')
//const { updateInfo } = require('../models/userModel')

userRouter.get('/users', getAllUsers)

userRouter.get('/login', getSingleUserInfo)

userRouter.post('/register', createUser)

userRouter.put('/users/:id', update)

userRouter.delete('/users/:id', deleteUser)


module.exports = userRouter;