const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

let host = process.env.DB_HOST
let port = process.env.DB_PORT
let protocol = process.env.DB_PROTOCOL
let databaseName = process.env.DB_NAME

let databaseString = `${protocol}://${host}:${port}`

const client = new MongoClient(databaseString);

async function connectToDatabase() {
    let connection;

    try {
        connection = await client.connect();

        const db = connection.db(databaseName);

        return db;
    } catch (error) {
        console.log(error);

        throw error;
    }
}

const db = connectToDatabase();

module.exports = db;