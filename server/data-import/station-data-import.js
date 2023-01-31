const csv = require('csvtojson');
const { MongoClient, ObjectId } = require('mongodb');

// Specify the folder path where the CSV files are located
const folderPath = 'C:\\Users\\O\\Desktop\\solita-assign-hsl\\station-data\\';

// Connection URL
const url =
  'mongodb+srv://rameshkarki:D5P9GyKg0Dz64jA3@cluster0.1w6zjbk.mongodb.net/?retryWrites=true&w=majority';

const dbName = 'journey_data';

async function main() {
  try {
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected successfully to MongoDB server');

    const db = client.db(dbName);
    const collections = await db
      .listCollections({ name: 'stations' })
      .toArray();
    const bulkInsertOps = [];

    if (collections.length > 0) {
      console.log('Collection already exists, not inserting data');
    } else {
      // Read the CSV files
      const fileName = ['station.csv'];
      const jsonObj = await csv().fromFile(folderPath + fileName);

      let counter = 0;
      const maxDocs = 1000;
      for (const row of jsonObj) {
        bulkInsertOps.push({ insertOne: { document: row } });
        counter++;
        if (counter >= maxDocs) {
          break;
        }
      }
    }

    if (bulkInsertOps.length > 0) {
      await db.collection('stations').bulkWrite(bulkInsertOps);
      console.log('Data inserted into the collection');
    } else {
      console.log('No valid data to insert into the collection');
    }
    client.close();
  } catch (err) {
    console.log(err);
  }
}

main();
