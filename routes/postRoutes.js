const { ge,deleteBlog } = require('../controllers/blogController')

const postRouter = require('express').Router()


postRouter.get('/allBlogs', getAllBlogs)
postRouter.get('/blogs/:id', getSpecificBlog)
postRouter.post('/blog/:id', createBlog)
postRouter.put('/blog/:id', updateBlog)
postRouter.delete('/blog/:id', deleteBlog)

module.exports = postRouter;