//add express
const express = require('express')
//add the bodyParser -> will help parse the request as well as create the 
// const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const db = require('./configuration/dbConfig')
const userRouter = require('./routes/userRoutes')
// const Role = db.role;


let corsOptions = {
    origin: 'http://localhost:3030'
};

// app.use(cors())
app.use(express.json())
app.use(cors(corsOptions))

// Routes 
app.use(userRouter)

//will parse the requests of the content type through json
// app.use(bodyParser.json())

//will parse requests with an encoded url link
// app.use(bodyParser.urlencoded({ extended: true }))

//base route
// app.get("/", (req, res) => {
//     res.json({ message: "Greetings everyone, welcome to our site!" })
// })

//set the port up
const PORT = 3030;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

//this function will help us set up the 3 rows in the database, and we will use true 
// const initial = () => {
//     Role.create({
//         id: 1,
//         name: "user"
//     })
// }

