const { MongoClient, ObjectId } = require('mongodb');

require('dotenv').config();
const getStation = async () => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected successfully to MongoDB database');

    const db = client.db(process.env.DB_NAME);

    const journey = await db.collection('stations').find({}).toArray();

    client.close();
    return journey;
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching station details ');
  }
};

module.exports = { getStation };
