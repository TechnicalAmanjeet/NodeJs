const data = require('./getData');
const insertData = require('./insertIntoDB');

const dataToInsert = {
    "Name":"Redmi Note 10 pro plus",
    "Price": 16000,
    "Brand" : "Xiomi",
    "Catagory": "Mobile"
};

async function test(){
    const da = await insertData(dataToInsert);
    console.log(da)
}

test();