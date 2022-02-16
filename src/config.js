const { config } = require('dotenv');
config()

module.exports = {
    db: {
        user: process.env.dbuser,
        password: process.env.dbpassword,
        host: process.env.dbhost,
        port: process.env.dbport,
        database: process.env.dbdatabase
    }
}