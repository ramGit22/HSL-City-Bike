// const request = require('request');
// const fs = require('fs');
// const mongoose = require('mongoose');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csv = require('csv-parser');

// const url = 'https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv';
// const path = require('path');
// const filePath = path.join(
//   'C:\\Users\\O\\Desktop\\solita-assign-hsl',
//   'trips.csv'
// );

// request
//   .get(url)
//   .on('error', (err) => {
//     console.log(err);
//   })
//   .pipe(fs.createWriteStream(filePath))
//   .on('finish', () => {
//     console.log('Data downloaded successfully!');
//   });

// //connect to MongoDB
// mongoose.connect(
//   'mongodb+srv://rameshkarki:BeAHMCzxSm91FCFj@cluster0.1w6zjbk.mongodb.net/city-bike?retryWrites=true&w=majority',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// const Trip = mongoose.model(
//   'Trip',
//   new mongoose.Schema({
//     startTime: String,
//     endTime: String,
//     startStation: String,
//     endStation: String,
//     duration: Number,
//   })
// );

// //validate data before importing
// fs.createReadStream('trips.csv')
//   .pipe(csv())
//   .on('data', (data) => {
//     if (validateData(data)) {
//       const trip = new Trip({
//         startTime: data.start_time,
//         endTime: data.end_time,
//         startStation: data.start_station,
//         endStation: data.end_station,
//         duration: data.duration,
//       });
//       trip.save((err) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//     } else {
//       console.log(`Invalid data: ${JSON.stringify(data)}`);
//     }
//   })
//   .on('end', () => {
//     console.log('Data imported successfully!');
//   });

// function validateData(data) {
//   //validation logic
//   return true;
// }
