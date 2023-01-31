import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavigationBar';

import axios from 'axios';

const JourneyTable = () => {
  const [journeyData, setJourneyData] = useState({});
  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [searchTerm, setSearchTerm] = useState('');
  const { departure, returnStation, distance, duration } = journeyData;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:3000/journey`);
      setJourneyData(response.data);
    }
    fetchData();
  }, []);

  if (!journeyData || Object.keys(journeyData).length === 0) {
    return <div>Loading...</div>;
  }

  const filteredDeparture = departure.filter((d) =>
    d.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredReturn = returnStation.filter((r) =>
    r.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredDistance = distance.filter((d) =>
    d.toString().includes(searchTerm)
  );
  const filteredDuration = duration.filter((d) =>
    d.toString().includes(searchTerm)
  );

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDeparture = filteredDeparture.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const currentReturn = filteredReturn.slice(indexOfFirstItem, indexOfLastItem);
  const currentDistance = filteredDistance.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const currentDuration = filteredDuration.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => setActivePage(pageNumber);

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredDeparture.length / itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <>
      <NavigationBar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          style={{
            width: '25%',
            marginTop: '20px',
            marginBottom: '5px',
            padding: '10px',
          }}
        />
      </div>
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
