const express = require('express');
const getDataFromMDB = require('./getDataFromMDB');
const insertIntoMDB = require('./insertIntoMDB');
const deleteFromDB = require('./deleteFromMDB');
const updateDataToMDB = require('./updateDataToMDB');
const { del } = require('express/lib/application');

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
app.get("/", async (req, resp) => {
    const result = await getDataFromMDB();
    resp.send(result);
    console.log(result);
});

// api 2 : post api => will take data from front end and save it to mdb server.
app.use(express.json()) // we have to write this to parse json file while working with post api i.e while we take data from front end.

app.post("/", async (req, resp) => {
    let result = req.body;
    result = await insertIntoMDB(result);
    console.log(result);
    resp.send(result);
})

// api 3 : delete api => will take data from front end and then delete accordingly data inside mdb server.
app.delete("/:name", async (req, resp) => {
    let condition = req.params.name;
    console.log(typeof(condition));
    condition = await deleteFromDB({"Name":condition});
    console.log(condition);
    resp.send(condition)
})

app.listen(5001);