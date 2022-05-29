const mongodb = require('mongodb');


// config file for mongodb server.
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'e-com';
const collectionName = 'products';

const client = new mongodb.MongoClient(url);

async function mdbConnection(){
    const connection = await client.connect();
    const db = connection.db(dbName);
    const collection = db.collection(collectionName);
    // console.log(await collection.find().toArray());
    console.log("Connected to mdb Server.");
    return collection;
}

// mdbConnection();
// console.log(client);

module.exports = mdbConnection;
