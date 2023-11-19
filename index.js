const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

var url = 'mongodb+srv://ace:buayeu2018@cluster0.iki4rme.mongodb.net/?retryWrites=true&w=majority';
const app = express();
const PORT = process.env.PORT || 3000;

function checkUndefined(value) {
    if(value !== undefined && value !== null && value != ""){
      return true;
    }
    return false;
  }


async function run(query) {
  const client = await MongoClient.connect(url);
  try {
    const db = client.db('Cluster0');
    const collection = db.collection('History');
    console.log("wtf");
    // Find the first document in the collection
    const data = await collection.find(query).toArray();
    console.log("tada!!!");
    return data;
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}

async function all_data() {
  const client = await MongoClient.connect(url);////hinh nhu phai ket noi kieu nay thi moi nhan duoc thong tin
  try {
    const db = client.db('Cluster0');
    const collection = db.collection('History');
    console.log("wtf");
    // Find the first document in the collection
    const data = await collection.find({}).toArray();
    console.log("tada!!!");
    return data;
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set('views', './frontend');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/frontend')));

app.get('/', (request, response) => {
  all_data().then((value) => {
    console.log(value);
    response.render('index', {users: value, result: []});
  }).catch(console.error);
})

app.post('/', (request, response) =>{
  const query_object = {};
  if(checkUndefined(request.body.name)) query_object.name = request.body.name; 
  console.log(typeof(request.body.email));
  console.log(request.body);
  if(checkUndefined(request.body.email)) query_object.email = request.body.email;
  if(checkUndefined(request.body.daystart)) query_object.daystart = request.body.daystart;
  if(checkUndefined(request.body.dayend)) query_object.dayend = request.body.dayend;
  if(checkUndefined(request.body.printer)) query_object.printer = request.body.printer;
  if(checkUndefined(request.body.pages)) query_object.pages = request.body.pages;

  console.log(`Received form data: ${query_object}`);
  
  run(query_object).then((value) => {
    console.log(value);
    response.render('index', {users: value});
  }).catch(console.error);
})

app.listen(PORT, () => {console.log(`connect on https://localhost:${PORT}!`)});

