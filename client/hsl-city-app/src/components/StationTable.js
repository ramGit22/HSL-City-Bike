import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavigationBar';

import axios from 'axios';

const StationTable = () => {
  const [stationData, setStationData] = useState({});
  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [searchTerm, setSearchTerm] = useState('');
  const { stationName, address, city, capacity } = stationData;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:3000/station`);
      setStationData(response.data);
      console.log(response);
    }
    fetchData();
  }, []);

  if (!stationData || Object.keys(stationData).length === 0) {
    return <div>Loading...</div>;
  }

  const filteredStationName = stationName.filter((d) =>
    d.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredAddress = address.filter((r) =>
    r.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredCity = city.filter((d) => d.toString().includes(searchTerm));
  const filteredCapacity = capacity.filter((d) =>
    d.toString().includes(searchTerm)
  );

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStation = filteredStationName.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const currentAddress = filteredAddress.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const currentCity = filteredCity.slice(indexOfFirstItem, indexOfLastItem);
  const currentCapacity = filteredCapacity.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => setActivePage(pageNumber);

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredStationName.length / itemsPerPage);
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
            <th>Station Name</th>
            <th>Adress</th>
            <th>City </th>
            <th>Capacity </th>
          </tr>
        </thead>
        <tbody>
          {currentStation.map((d, index) => (
            <tr key={index}>
              <td>{d}</td>
              <td>{currentAddress[index]}</td>
              <td>{currentCity[index]}</td>
              <td>{currentCapacity[index]}</td>
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

export default StationTable;
