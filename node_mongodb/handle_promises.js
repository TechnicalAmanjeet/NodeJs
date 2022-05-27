const {MongoClient} = require('mongodb');

const url = 'mongodb://0.0.0.0:27017';
const dbName = 'Test';
const collectionName = 'Document';

const client = new MongoClient(url);
// console.log(client);

// M-1 => Handling promises by using async and await. ( latest )

// async function getData(){
//     const connect = await client.connect();
//     console.log('connected to local server');
//     const db = connect.db(dbName);
//     const collection = db.collection(collectionName);
//     const data = await collection.find().toArray();
//     console.log("Data is =>> ", data);
//     // console.log(`Data is =>> ${data}`);
// }

// getData();

// M-2  ( old dated )
client.connect().then( (connection) => {
    console.log("1");
    return connection.db(dbName);
}).then( (db) => {
    console.log("2");
    return db.collection(collectionName);
}).then( (collection) => {
    console.log("3");
    return collection.find().toArray();
}).then( (data) => {
    // console.log(data);
    data.forEach( (item) => {
        console.log(item);
    })
}).catch( (err) => {
    console.log(err);
}).finally( () =>{
    console.log("done");
})




