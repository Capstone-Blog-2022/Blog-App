const { Pool } = require('pg')

const pool = new Pool({
    
        host: "localhost",
        user: "eagyemang",
        password: "1",
        database: "capstone",
        dialect: "postgres",
        pool: {
            max: 5, 
            min: 0, 
            acquire: 30000,
            idle: 15000
        }
    
})

module.exports = pool