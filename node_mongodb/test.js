const dbConnect = require('./mdbServer');
const getData = require('./getData');

const dataToInsert = [
    { "Name" : "Aman",
      "Age" : 22,
      "Gender" : "male"
  },
  {
      "Name" : "Kanhaya",
      "Age" : 21,
      "Gender" : "male"
  }
];

async function insertData(data){
    try{
        const collection = await dbConnect();
    collection.insertMany(data);
    console.log("Insertion Done");
    }
    catch(err){
        console.log("err =>> " + err);
    }
}