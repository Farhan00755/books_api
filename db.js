const {pool} = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGNAME,
    password: process.env.PGPASSWORD,

    ssl : {
        rejectUnauthorized: false
    },
});

module.exports = pool;