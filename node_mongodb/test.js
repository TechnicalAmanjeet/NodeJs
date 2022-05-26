const {getCollection} = require('./getCollection');


async function showData(){
    try{
        const collection = await getCollection();
        const data = await collection.find({}).toArray();
        console.log(data);
    }
    catch(err){
        console.log("error =>> " + err);
    }
}

async function insertData(Data){
    try{
        const collection = await getCollection();
        const insertData = await collection.insertMany(Data);
        console.log('Data inserted successfully');
    }
    catch(err){
        console.log("error in insertion =>> " + err);
    }
}

async function updateData(){
    try{
        const collection = await getCollection();
        const updatedData = await collection.update( {'a':3}, {$set : {"Name": "riya"}})
        console.log("updated Data =>> " + updateData);
    }
    catch(err){
        console.log("err in updateDate =>> " + err);
    }
}

async function dropData(){
    try{
        const collection = await getCollection();
        const deletedData = await collection.delete({'Name':'riya'});
        console.log("deleted successfully");
    }
    catch(err){
        console.log("err in deletion =>> " + err);
    }
}

let Data = [
    {
     "Name": "Amanjeet",
     "Age": 21,
     "Hobbies": ['cricket', 'song', 'reading']
}];

insertData(Data);
showData();
// updateData();
// showData();
dropData();
showData();