const mdbConnection = require('./config');


async function getData(){
    const collection = await mdbConnection();
    const data = await collection.find().toArray();
    console.log(data);
}


getData();