const mdbConnection = require('./config');

const dataToInsert = {
    "Name":"Redmi Note 11 pro plus",
    "Price": 19000,
    "Brand" : "Xiomi",
    "Catagory": "Mobile"
};

// console.log(typeof(dataToInsert));

async function insertData(data){
    try{
        const collection = await mdbConnection();
    const result = await collection.insertOne(data);
    if(result.acknowledged){
        console.log("Data inserted successfully");
        return result;
    }
    // console.log(result);
    }
    catch(err){
        console.log("error : " + err);
        return err;
    }

}

// insertData(dataToInsert);
module.exports = insertData;