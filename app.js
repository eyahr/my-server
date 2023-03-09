const express = require('express');
const app = express();
const port = 4000;
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/mydatabase';

async function connectToDatabase() {
  const client = await MongoClient.connect(url, { useUnifiedTopology: true });
  return client.db();
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/documents', async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection('mycollection');
  const documents = await collection.find({}).toArray();
  res.send(documents);
});

app.post('/documents', async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection('mycollection');
  const result = await collection.insertOne(req.body);
  res.send(result.ops[0]);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});