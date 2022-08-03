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
            // will wait 30 seconds to connect to the PG pool before throwing an error
            acquire: 30000,
            // will go idle for 15 seconds before it times out
            idle: 15000
        }
    
})

module.exports = pool