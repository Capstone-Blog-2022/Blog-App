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
    static async updateInfo(id, username, password, email, about, first_name,last_name,) {
        await pool.query('UPDATE users SET username = $2, password = $3, email = $4, about = $5, first_name = $6, last_name = $7, WHERE id = $1', [id, username, password, email, about, first_name,last_name,])
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