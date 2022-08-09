const pool = require("../configuration/dbConfig")

class Comments {
    //gets all the comments in the database
    static async getAllCommentsFromDB(){
        const sql = `SELECT * FROM comments`
        const dbResult = await pool.query(sql)
        return dbResult.rows
    }

    //gets all the comments pertained to a specific post
    //use post id
    static async getAllCommentsOnPostFromDB(post_id){
        const sql = `SELECT * FROM comments WHERE post_id = ($1)`
        const dbResult = await pool.query(sql, [post_id])
        return dbResult.rows

    }

    //create a comment
    static async createCommentOnPostDB(){

    }

    //update a comment
    static async updateCommentInDB(){
        
    }

    //delete comment
    static async deleteCommentInDB(){

    }
}

module.exports = Comments;