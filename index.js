const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

var url = 'mongodb+srv://ace:buayeu2018@cluster0.iki4rme.mongodb.net/?retryWrites=true&w=majority';
const app = express();
const PORT = process.env.PORT || 3000;

async function all_data() {
  const client = await MongoClient.connect(url);////hinh nhu phai ket noi kieu nay thi moi nhan duoc thong tin
  try {
    const db = client.db('Cluster0');
    const collection = db.collection('History');
    console.log("wtf");
    // Find the first document in the collection
    const data = await collection.find({}).sort({day: -1}).toArray();
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
    //console.log(value);
    response.render('index', {users: value});
  }).catch(console.error);
})

app.listen(PORT, () => {console.log(`connect on https://localhost:${PORT}!`)});

