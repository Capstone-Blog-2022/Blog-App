//add express
const express = require('express')
//add the bodyParser -> will help parse the request as well as create the 
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

let corsOptions = {
    origin: 'http://localhost:3030'
};

app.use(cors(corsOptions))

//will parse the requests of the content type through json
app.use(bodyParser.json())

//will parse requests with an encoded url link
app.use(bodyParser.urlencoded({ extended: true }))

//base route
app.get("/", (req, res) => {
    res.json({ message: "Greetings everyone, welcome to our site!" })
})

//set the port up
const PORT = 3030;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})