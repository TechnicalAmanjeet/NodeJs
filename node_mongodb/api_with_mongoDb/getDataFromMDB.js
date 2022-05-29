const mdbConnection = require('./config');

// const findObject = {"brand":"vivo"};

async function getData(findObject = {}){
    try{
        const collection = await mdbConnection();
    const data = await collection.find(findObject).toArray();
    console.log("Getting Data from mdb server.");
    // console.log(data);
    return data;
    }
    catch(err){
        console.log("Error : " + err);
        return err;
    }
}

// getData(findObject);
// console.log( getData());

module.exports = getData;