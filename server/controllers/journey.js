const journeyModel = require('../models/journey');

const getJourney = async (req, res) => {
  try {
    const journey = await journeyModel.getJourney();
    const departure = journey.map((journey) => {
      return journey['Departure station name'];
    });

    const returnStation = journey.map((journey) => {
      return journey['Return station name'];
    });
    const distance = journey.map((journey) => {
      return journey['Covered distance (m)'] / 1000; // convert to kilometers    })
    });
    const duration = journey.map((journey) => {
      return journey['Duration (sec'][')'] / 60; // convert to minutes
    });

    res.json({ departure, returnStation, distance, duration });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ' Error fetching journey details' });
  }
};

module.exports = { getJourney };
