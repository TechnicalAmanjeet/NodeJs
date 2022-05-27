const dbConnect = require('./mdbServer');


async function deletData(){
    try{
        const collection = await dbConnect();
        const result = await  collection.deleteMany({"Name" : "Kanhaya"});
        // console.log(result)
        if(result.acknowledged){
            console.log("Data Deleted successfully.");
        }
    
    }
    catch(err){
        console.log("err =>> " + err);
    }
}

deletData();


