const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

// const { uri } = require('../config');
const dbName = 'journey_data';

const getJourney = async () => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected successfully to MongoDB database');

    const db = client.db(dbName);

    const journey = await db.collection('journeys').find({}).toArray();

    client.close();
    return journey;
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching journey details ');
  }
};

module.exports = { getJourney };
