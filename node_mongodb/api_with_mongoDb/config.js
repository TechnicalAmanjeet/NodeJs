const mongodb = require('mongodb');


// config file for mongodb server.
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'e-com';
const collectionName = 'products';

const client = new mongodb.MongoClient(url);

const mdbConnection = async () =>{
    const connection = await client.connect();
    const db = connection.db(dbName);
    const collection = db.collection(collectionName);
    // console.log(await collection.find().toArray());
    return collection;
}

// mdbConnection();
// console.log(client);

module.exports = mdbConnection;
