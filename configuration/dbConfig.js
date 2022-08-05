const { Pool } = require('pg')

const pool = new Pool({
    
        host: 'localhost',
        user: 'eagyemang',
        password: "1",
        database: 'capstone'
    
})

module.exports = pool