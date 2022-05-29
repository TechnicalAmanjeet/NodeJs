const data = require('./getData');
const insertData = require('./insertIntoDB');
const deleteFromDB = require('./deleteFromDB');

const dataToInsert = {
    "Name":"Redmi Note 10 pro plus",
    "Price": 16000,
    "Brand" : "Xiomi",
    "Catagory": "Mobile"
};

const deleteData = {
    "Price": 16000
}

async function test(data){
    const result = await deleteFromDB(deleteData);
    console.log(result)
}


test(deleteData);