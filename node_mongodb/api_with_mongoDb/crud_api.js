const express = require('express');
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


// will see how to connect our node program to front end using express js
const app = express();
let count = 0;


// api 1 : get api => will take data from mdb server and post it to front end.
app.get("", async (req, resp) => {
    const result = await data();
    resp.send(result);
    console.log(result);
})

app.listen(5001);