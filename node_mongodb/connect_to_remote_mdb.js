const {MongoClient} = require('mongodb');


const url = 'mongodb+srv://a@cluster0.dsifi.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(url);

async function mongodbConnect(){
  try{
    const connection = await client.connect();
    console.log("connected to mdb server");
    return connection;
  }
  catch(err){
    console.log(err);
  }
}

// mongodbConnect();
module.exports.mongodbConnect;
