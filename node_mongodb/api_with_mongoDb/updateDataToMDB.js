const mdbConnection = require('./config');

const cond = {"Name" : "Iqoo z5"};
const change = {"Name": "Iqoo z6 pro", "Price":23000};


const updateDataToMDB = async (condtion, change) =>{
    const collection = await mdbConnection();
    const result = await collection.updateOne(condtion , {$set : change});
    console.log(result);
    return result;
}

// updateDataToMDB(cond, change);
module.exports = updateDataToMDB;