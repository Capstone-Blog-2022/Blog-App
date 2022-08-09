const Posts = require("../models/postModel")
const { getAllPostsFromDB,createPostInDB, displayPostFromDB, deletePostFromDB} = require("../models/postModel")

const getAllBlogs = async (req, res) => {

    try {
        const posts = Posts.getAllPostsFromDB()
        return res.status(200).json({
            posts
        })
    } catch (err) {
        return res.status(400).send(err.message)

    }

}
const createBlog = async (req, res) => {
    const { title, description, body } = req.body
    const blog = { title, description, body }
    try {
        const newBlog = await User.createPostInDB(blog)
        return res.status(200).send({ newBlog })

    } catch (err) {
        return res.status(400).send(err.message)
    }

}

const retrieveBlog = async (req, res) => {
    const post_id = req.params.id
    try {
        const postData = await Posts.displayPostFromDB(post_id)
        return res.status(200).send({ postData })
    } catch (err) {
        return res.status(200).json({
            message: err.message
        })

    }
}


const updateBlog = async (req, res) => {

    try {

    } catch (error) {

    }

}

const deleteBlog = async (req, res) => {
    const post_id = req.params.id;

    try {
        const post = await Posts.deletePostFromDB(post_id)
        return res.status(200).send({ post })
    } catch (error) {
        return res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    getAllBlogs,
    createBlog,
    retrieveBlog,
    updateBlog,
    deleteBlog
}