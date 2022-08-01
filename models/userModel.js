const pool = require()

class User {

        //make a function to gather all the data for the user accounts
    static async getAllUserAccounts (){
        const db = await pool.query('SELECT * FROM users')
        return db.rows
    }

    static async displayInfo(id){
        const db = await pool.query('SELECT * FROM users WHERE id = $1', [id])
        return db.rows
    }

    static async updateInfo(id, email, first_name, last_name, age, birthday, image, bio){
        
    }
}


module.exports = User;