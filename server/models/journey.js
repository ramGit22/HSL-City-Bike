const { MongoClient, ObjectId } = require('mongodb');
const { url } = require('../config');
const dbName = 'journey_data';

const getJourney = async (id) => {
  try {
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected successfully to MongoDB database');

    const db = client.db(dbName);

    const journey = await db
      .collection('journeys')
      .findOne({ _id: ObjectId(id) });

    client.close();
    return journey;
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching journey details ');
  }
};

module.exports = { getJourney };
