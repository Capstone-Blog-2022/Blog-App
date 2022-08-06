const userRouter = require('express').Router()

const { getAllUsers, deleteUser, update } = require('../controllers/userController')
//const { updateInfo } = require('../models/userModel')

userRouter.get('/users', getAllUsers)

userRouter.get('/user/:id', getUserInfo)

userRouter.post('/user/:id', createUserInfo)

userRouter.put('/user/:id', update)

userRouter.delete('/user/:id', deleteUser)


module.exports = userRouter;