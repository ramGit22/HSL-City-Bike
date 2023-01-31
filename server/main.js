const express = require('express');
const journeyController = require('./controllers/journey');
const stationController = require('./controllers/station');
const cors = require('cors');

const app = express();
app.use(cors());
app.get('/journey', journeyController.getJourney);
app.get('/station', stationController.getStation);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
