const csv = require('csvtojson');
const { MongoClient, ObjectId } = require('mongodb');

// Specify the folder path where the CSV files are located
const folderPath = 'C:\\Users\\O\\Desktop\\solita-assign-hsl\\journey-data\\';

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
      .listCollections({ name: 'journeys' })
      .toArray();
    const bulkInsertOps = [];

    if (collections.length > 0) {
      console.log('Collection already exists, not inserting data');
    } else {
      // Read the CSV files
      const fileName = ['journey1.csv'];
      const jsonObj = await csv().fromFile(folderPath + fileName);

      let counter = 0;
      const maxDocs = 1000;
      for (const row of jsonObj) {
        const duration = parseFloat(row['Duration (sec'][')']);
        const distance = Number(row['Covered distance (m)']);
        if (duration >= 10 && distance >= 10) {
          bulkInsertOps.push({ insertOne: { document: row } });
          counter++;
          if (counter >= maxDocs) {
            break;
          }
        }
      }
    }

    if (bulkInsertOps.length > 0) {
      await db.collection('journeys').bulkWrite(bulkInsertOps);
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
