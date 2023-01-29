import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

const JourneyTable = () => {
  const [journeyData, setJourneyData] = useState({});
  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage] = useState(20);
  const { departure, returnStation, distance, duration } = journeyData;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:3000`);
      setJourneyData(response.data);
    }
    fetchData();
  }, []);

  if (!journeyData || Object.keys(journeyData).length === 0) {
    return <div>Loading...</div>;
  }

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDeparture = departure.slice(indexOfFirstItem, indexOfLastItem);
  const currentReturn = returnStation.slice(indexOfFirstItem, indexOfLastItem);
  const currentDistance = distance.slice(indexOfFirstItem, indexOfLastItem);
  const currentDuration = duration.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setActivePage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(departure.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Departure Station</th>
            <th>Return Station</th>
            <th>Distance (km)</th>
            <th>Duration (min)</th>
          </tr>
        </thead>
        <tbody>
          {currentDeparture.map((d, index) => (
            <tr key={index}>
              <td>{d}</td>
              <td>{currentReturn[index]}</td>
              <td>{currentDistance[index]}</td>
              <td>{currentDuration[index]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className="my-3">
        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            active={number === activePage}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
};

export default JourneyTable;
