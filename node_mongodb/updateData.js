const dbConnect = require('./mdbServer');
const getData = require('./getData');

const dataToUpdate = { "Name" : "Riya",
      "Age" : 22,
      "Gender" : "Female"
  };

async function updateData(){
    try{
        const collection = await dbConnect();
    collection.updateMany({"Name" : "Aman"}, {$set : {"Name" : "Riya"}});
    console.log("Update Done");
    }
    catch(err){
        console.log("err =>> " + err);
    }
}


updateData();


// getData().then( (data) => {
//     console.log(data);
// })