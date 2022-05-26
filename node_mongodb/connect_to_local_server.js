const {MongoClient} = require('mongodb');

// const url = 'mongodb://0.0.0.0:27017';
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'Test';
const collectionName = 'Document';

const client = new MongoClient(url);
// console.log(client);

async function mdbConnection(){
    try{
        const connection = client.connect();
        console.log('client is connected to mdb server successfully');
        return connection;
    }
    catch(err){
        console.log("error =>> " + err);
        return err;
    }
}

module.exports = {mdbConnection};


