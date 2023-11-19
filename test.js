
const MongoClient = require('mongodb').MongoClient;

async function connectToMongoDB() {
  // Replace with your actual MongoDB connection details
  const connectionString = 'mongodb+srv://ace:buayeu2018@cluster0.iki4rme.mongodb.net/?retryWrites=true&w=majority';
  const client = await MongoClient.connect(connectionString);
  try {
    
    const db = client.db('Cluster0');
    const collection = db.collection('History');
    // Retrieve all documents
    const documents = await collection.find({}).toArray();
    console.log('Retrieved documents:', documents);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    // Close the connection
    await client.close();
  }
}

connectToMongoDB();
