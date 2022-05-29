const mdbConnection = require('./config');

const obj = {
    "Brand" : "vivo"
};

async function deleteFromDB(obj){
    const collection = await mdbConnection();
    const result = await collection.deleteOne(obj);
    // console.log(result);
    return result;
}

// deleteFromDB(obj);

module.exports = deleteFromDB;