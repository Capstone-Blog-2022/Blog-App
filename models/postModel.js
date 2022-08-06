const pool = require("../configuration/dbConfig")

class Posts{
    static async getAllPostsFromDB(){
        const sequelizePosts = `SELECT * FROM posts`
        const result = await pool.query(sequelizePosts)
        return result.rows
    }

    static async displayPostFromDB(){
        const sequelizePost = `SELECT * FROM posts WHERE id = ($1)`
        const db = await pool.query(sequelizePost, [id])
        return db.rows
    }

    static async updatePostInDB(){
        const sequelizing = `UPDATE posts SET `
    }

    static async deletePostFromDB(){

    }

}

module.exports = Posts;