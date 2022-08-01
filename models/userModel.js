const pool = require()

class User {

        //make a function to gather all the data for the user accounts
    static async getAllUserAccounts (){
        const db = await pool.query('SELECT * FROM users')
        return db.rows
    }
        //will display all the user info
    static async displayInfo(id){
        const db = await pool.query('SELECT * FROM users WHERE id = $1', [id])
        return db.rows
    }

        //will give a CRUD feature for the user information
    static async updateInfo(id, email, first_name, last_name, age, birthday, image, bio){
        await pool.query('UPDATE users SET email = $2, first_name = $3, last_name = $4, age = $5, birthday = $6, image = $7, bio = $8 WHERE id = $1', [id, email, first_name, last_name, age, birthday, image, bio])
        const databaseResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return databaseResult.rows[0]
    }
}


module.exports = User;