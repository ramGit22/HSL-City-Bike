const express = require('express');
const journeyController = require('./controllers/journey');

const app = express();

app.get('/journey/:id', journeyController.getJourney);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
