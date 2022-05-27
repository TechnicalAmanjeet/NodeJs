const dbConnect = require('./mdbServer');
const getData = require('./getData');

const dataToUpdate = { "Name" : "Riya",
      "Age" : 22,
      "Gender" : "Female"
  };

async function updateData(){
    try{
        const collection = await dbConnect();
        const result = await collection.updateMany({"Name" : "Riya"}, {$set : {"Name" : "Neha"}});
    // console.log("Update Done");
        if(result.acknowledged){
            console.log("Data updated successfully");
        }
    }
    catch(err){
        console.log("err =>> " + err);
    }
}


updateData();


// getData().then( (data) => {
//     console.log(data);
// })