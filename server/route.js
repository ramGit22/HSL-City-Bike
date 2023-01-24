const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const url = process.env.MONGODB_URL;

const app = express();

// Database Name
const dbName = 'journey_data';

// Use connect method to connect to the Server
app.get('/journey/:id', async (req, res) => {
  try {
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected successfully to MongoDB server');

    // Get the database
    const db = client.db(dbName);

    // Get the journey details
    const journey = await db
      .collection('journeys')
      .findOne({ _id: ObjectId(req.params.id) });

    // Compute the journey details
    const departure = journey['Departure station name'];
    const returnStation = journey['Return station name'];
    const distance = journey['Covered distance (m)'] / 1000; // convert to kilometers
    const duration = journey['Duration (sec'][')'] / 60; // convert to minutes

    res.json({ departure, returnStation, distance, duration });
    client.close();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error fetching journey details' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
