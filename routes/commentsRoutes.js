const commentsRouter = require('express').Router()

//get all comments
commentsRouter.get('/comments', ) 
//get all comments on a specific blog
commentsRouter.get('/blogs/:id/comments', )
//create a comment
commentsRouter.post('/blogs/:id/comments', )
//update a comment
commentsRouter.patch('/blogs/:id/comments', )
//delete a comment
commentsRouter.delete('blogs/:id/comments', )

module.exports = commentsRouter;