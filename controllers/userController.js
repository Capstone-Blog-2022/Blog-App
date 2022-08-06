const pool = require('../configuration/dbConfig')
const User = require('../models/userModel')

const getSingleUserInfo = async (req, res) => {
    const user_id = req.params.id;

    try {
        const userData = await User.getSingleUserInfoFromDB(user_id)
        return res.status(200).send({ userData })

        //make an edge case for those who aren't in the system

    } catch (err) {
        return res.status(200).json({
            message: err.message
        })
    }

}

const update = async (req, res) => {
    const id = req.params.id
    try {


    } catch {

    }

}

const createUser = async (req, res) => {
    const { username, password, email, about, first_name, last_name } = req.body
    const userInfo = { username, password, email, about, first_name, last_name }
    try {
        const newUserInfo = await User.createUserInDB(userInfo)
        return res.status(200).send({ newUserInfo })

    } catch (err) {
        return res.status(400).send(err.message)
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.getAllUsersFromDB()
        return res.status(200).json({
            users
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

const deleteUser = async (req, res) => {
    const user_id = req.params.id

    try {
        const user = await User.deleteUserInfoFromDB(user_id)
        return res.status(200).send({ user })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    getAllUsers,
    getSingleUserInfo,
    createUser,
    update,
    deleteUser
}