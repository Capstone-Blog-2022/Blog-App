const { getAllPostsFromDB,  } = require("../models/postModel")

const getAllBlogs = async(req, res) => {
    
    try{
        const posts = getAllPostsFromDB()
        return res.status(200).json({
            posts
        })
    }catch(err){
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
    try{

    }catch(err){


    }
}


const updateBlog = async(req, res) => {

}

const deleteBlog = async(req, res) =>{

}

module.exports = {
    getAllBlogs,
    createBlog,
    retrieveBlog,
    updateBlog,
    deleteBlog
}