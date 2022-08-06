const pool = require('../configuration/dbConfig')

class User {
    static async getAllUsersFromDB() {
        const sql = `
        SELECT * 
        FROM users`
        const dbResult = await pool.query(sql)
        return dbResult.rows
    }

    //will display all the user info
    static async getSingleUserInfoFromDB(user_id) {
        const sql = `SELECT * FROM users WHERE id = ($1)`
        const dbResult = await pool.query(sql, [user_id])
        return dbResult.rows
    }

    static async createUserInDB({username, password, email, first_name, last_name, about}){
        const sql = `
        INSERT INTO users (username, password, email, first_name, last_name, about)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `
        const dbResult = await pool.query(sql, [username, password, email, first_name, last_name, about])
        return dbResult.rows
    }

    //will give a CRUD feature for the user information
    static async updateInfo(id, email, first_name, last_name, age, about) {
        await pool.query('UPDATE users SET email = $2, first_name = $3, last_name = $4, age = $5, birthday = $6, image = $7, bio = $8 WHERE id = $1', [id, email, first_name, last_name, age, birthday, image, bio])
        const databaseResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return databaseResult.rows[0]
    }

    static async deleteUserInfoFromDB(user_id){
        const sql = `DELETE FROM users WHERE id = $1 RETURNING *`
        const dbResult = await pool.query(sql, [user_id])
        return dbResult.rows[0]
    }
}



module.exports = User;