const { getAllBlogs, getSpecificBlog, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController')

const postRouter = require('express').Router()


postRouter.get('/blogs', getAllBlogs)
postRouter.get('/blogs/:id', getSpecificBlog)
postRouter.post('/blogs/:id', createBlog)
postRouter.put('/blogs/:id', updateBlog)
postRouter.delete('/blogs/:id', deleteBlog)

module.exports = postRouter;