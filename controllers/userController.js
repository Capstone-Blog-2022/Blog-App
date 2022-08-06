const pool = require('../configuration/dbConfig')
const User = require('../models/userModel')

 const displayInfo = async (req, res) => {
    const id = req.params.id;

    try{
    
    
        //make an edge case for those who aren't in the system
        if(id === 0){
            res.status(500).send("non-existent user")
        }
    }   catch{
        
    }

}

const update = async (req, res) =>{
    const id = req.params.id
    try{

        
    }catch{

    }

}

const createUserInfo = async(req, res) => {
    const id = req.params.id
    try{
        
    }catch{

    }
}

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

const deleteUser = (req, res) => {
    const id = req.params.id
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (err, results) => {
        //if there is an error, throw an error
      if (err) {
        throw err
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

module.exports = {
    getAllUsers,
    // displayInfo,
     update, 
    deleteUser
}