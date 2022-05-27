const dbConnect = require('./mdbServer');

async function getData(){
    // console.log("inside getData");
    const collection = await dbConnect();
    const data = await collection.find().toArray();
    console.log(data);
    return data;
}

getData();

module.exports = getData;