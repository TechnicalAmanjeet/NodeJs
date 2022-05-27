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
        const result = await collection.insertMany(data);
        if(result.acknowledged){
            console.log("Data inserted successfully");
        }
    }
    catch(err){
        console.log("err =>> " + err);
    }
}


insertData(dataToInsert);


// getData().then( (data) => {
//     console.log(data);
// })