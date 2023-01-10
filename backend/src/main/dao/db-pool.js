const { Pool } = require('pg')
const dotenv = require("dotenv")
dotenv.config()

const connectionString = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;

console.log("Postgres connection string:")
console.log(connectionString)

const pool = new Pool({
    // single pool
    connectionString,
});

module.exports = pool;