const stationModel = require('../models/station');

const getStation = async (req, res) => {
  try {
    const station = await stationModel.getStation();
    const stationName = station.map((station) => {
      return station['Nimi'];
    });

    const address = station.map((station) => {
      return station['Adress'];
    });
    const city = station.map((station) => {
      return station['Kaupunki'];
    });
    const capacity = station.map((station) => {
      return station['Kapasiteet'];
    });

    const x = station.map((x) => {
      return x['x'];
    });

    const y = station.map((y) => {
      return y['y'];
    });

    res.json({ stationName, address, city, capacity, x, y });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ' Error fetching station details' });
  }
};

module.exports = { getStation };
