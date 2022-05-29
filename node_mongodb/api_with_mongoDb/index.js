const data = require('./getDataFromMDB');
const insertData = require('./insertIntoMDB');
const deleteFromDB = require('./deleteFromMDB');
const updateDataToMDB = require('./updateDataToMDB');

const dataToInsert = {
    "Name":"Redmi Note 10 pro plus",
    "Price": 16000,
    "Brand" : "Xiomi",
    "Catagory": "Mobile"
};

const condition = {"Brand": "Xiomi"};
const change = {"Brand": "Vivo"};

const deleteData = {
    "Price": 16000
}

// async function test(cond, change){
//     const result = await updateDataToMDB(cond, change);
//     console.log(result)
// }



test(condition, change);