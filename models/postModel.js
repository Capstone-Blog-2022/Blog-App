const pool = require("../configuration/dbConfig")

class Posts {
    static async getAllPostsFromDB() {
        const sequelizePosts = `SELECT * FROM posts`
        const result = await pool.query(sequelizePosts)
        return result.rows
    }

    static async displayPostFromDB(post_id) {
        const sqlPost = `SELECT * FROM posts WHERE id = ($1)`
        const db = await pool.query(sqlPost, [post_id])
        return db.rows[0]
    }

    static async createPostInDB({ title, description, body, comments, hashtags, category, created_at }) {
        const sql = `
        INSERT INTO users (title, description, body, comments, hashtags, category, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
        `
        const db = await pool.query(sql, [title, description, body, comments, hashtags, category, created_at])
        return db.rows
    }

    static async updatePostInDB(id, title, description, body, comments, hashtags, category) {
        await pool.query(`UPDATE posts SET email = $2, first_name = $3, last_name = $4, age = $5, birthday = $6, image = $7, bio = $8 WHERE id = $1', [id, email, first_name, last_name, age, birthday, image, bio] `)
        const dbResult = await pool.query(`SELECT * FROM users WHERE id = $1`, [id])
        return dbResult.rows[0]
    }

    static async deletePostFromDB(post_id) {
        const sql = `DELETE FROM posts WHERE id = $1 RETURNING *`
        const dbResult = await pool.query(sql, [post_id])
        return dbResult.rows[0]
    }

}

module.exports = Posts;