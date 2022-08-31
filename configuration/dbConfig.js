const { Pool } = require('pg')

const pool = new Pool({
    
        host: 'localhost',
        user: 'capstone',
        password: "capstone",
        database: 'capstone',
        port: 5432,
    
})

module.exports = pool