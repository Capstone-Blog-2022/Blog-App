const pool = require('../configuration/dbConfig')
const User = require('../models/userModel')

// await const displayInfo = (req, res) => {
//     const id = req.params.id;

//     try{
//     //make an edge case for those who aren't in the system

//     }   catch{
        
//     }

// }

// async const update = (req, res) =>{
//     const id = req.params.id

// }

const getAllUsers = async (req, res) => {
    try {
        const users = await User.getAllUsersFromDB()
        return res.status(200).json({
            users
        })
    } catch (err) {
        return res.status(200).json({
            message: err.message
        })
    }
}

// const deleteUser = (req, res) => {
//     const id = parseInt(req.params.id)
  
//     pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User deleted with ID: ${id}`)
//     })
//   }

module.exports = {
    getAllUsers,
    // displayInfo,
    // update, 
    // deleteUser
}