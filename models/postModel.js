const pool = require("../configuration/dbConfig")

class Posts{
    static async getAllPostsFromDB(){
        const sequelizePosts = `SELECT * FROM posts`
        const result = await pool.query(sequelizePosts)
        return result.rows
    }

    static async displayPostFromDB(){
        const sqlPost = `SELECT * FROM posts WHERE id = ($1)`
        const db = await pool.query(sqlPost, [id])
        return db.rows[0]
    }

    static async createPostInDB({}){
        const sql =``
        const db = await pool.query()
    }

    static async updatePostInDB(){
        const sequelizing = `UPDATE posts SET `
    }

    static async deletePostFromDB(post_id){
        const sql = `DELETE FROM posts WHERE id = $1 RETURNING *`
    }

}

module.exports = Posts;