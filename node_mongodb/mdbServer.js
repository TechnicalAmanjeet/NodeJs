const {MongoClient} = require('mongodb');

const url = 'mongodb://0.0.0.0:27017';
const dbName = 'Test';
const collectionName = 'Document';

const client = new MongoClient(url);

async function dbConnect(){
    const connection = await client.connect();
    const db = connection.db(dbName);
    const collection = db.collection(collectionName);
    console.log("connected to mdb server successfully");
    return collection;
}

module.exports = dbConnect;