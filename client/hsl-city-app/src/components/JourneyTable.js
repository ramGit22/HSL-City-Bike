import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JourneyTable = () => {
  const [journeyData, setJourneyData] = useState([]);
  const { id } = useParams();
  console.log('id ', id);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:3000/journey/${id}`);
      setJourneyData(response.data);
    }
    fetchData();
  }, [id]);

  return (
    <table>
      <thead>
        <tr>
          <th>Departure Station</th>
          <th>Return Station</th>
          <th>Distance (km)</th>
          <th>Duration (min)</th>
        </tr>
      </thead>
      <tbody>
        {/* {journeyData.map((journey) => ( */}
        <tr>
          <td>{journeyData.departure}</td>
          <td>{journeyData.returnStation}</td>
          <td>{journeyData.distance}</td>
          <td>{journeyData.duration}</td>
        </tr>
        {/* ))} */}
      </tbody>
    </table>
  );
};

export default JourneyTable;
