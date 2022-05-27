const dbConnect = require('./mdbServer');


async function deletData(){
    try{
        const collection = await dbConnect();
        collection.deleteMany({"Name" : "Amanjeet"})
    console.log("Data deleted successfully.");
    }
    catch(err){
        console.log("err =>> " + err);
    }
}

deletData();


