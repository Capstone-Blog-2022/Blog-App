const { verifySignUp } = require('../middleware')
const controller = require("../controllers/authController.js")

 
    app.use( function (req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        ), 
        next()
    })



