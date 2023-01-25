const journeyModel = require('../models/journey');

const getJourney = async (req, res) => {
  try {
    const journey = await journeyModel.getJourney(req.params.id);
    const departure = journey['Departure station name'];
    const returnStation = journey['Return station name'];
    const distance = journey['Covered distance (m)'] / 1000; // convert to kilometers
    const duration = journey['Duration (sec'][')'] / 60; // convert to minutes

    res.json({ departure, returnStation, distance, duration });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ' Error fetching journey details' });
  }
};

module.exports = { getJourney };
