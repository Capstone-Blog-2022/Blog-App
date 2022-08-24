const { getAllBlogs, createBlog, updateBlog, deleteBlog, retrieveBlog } = require('../controllers/blogController')

const postRouter = require('express').Router()


postRouter.get('/blogs', getAllBlogs)
postRouter.get('/blogs/:id', retrieveBlog)
postRouter.post('/blogs/:id', createBlog)
postRouter.put('/blogs/:id', updateBlog)
postRouter.delete('/blogs/:id', deleteBlog)

module.exports = postRouter;