const {mdbConnection} = require('./connect_to_local_server');


const dbName = 'Test';
const collectionName = 'Document';

async function getCollection(){
   try{
    let connection = await mdbConnection();
    console.log("connection done");
    let db = await connection.db(dbName);
    console.log("db done");
    let collection = await db.collection(collectionName);
    console.log("collection done")
    return collection;
   }
   catch(err){
       return err;
   }
}

module.exports = {getCollection};