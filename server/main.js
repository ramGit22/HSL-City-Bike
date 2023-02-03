const express = require('express');
const journeyController = require('./controllers/journey');
const stationController = require('./controllers/station');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.get('/journey', journeyController.getJourney);
app.get('/station', stationController.getStation);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
