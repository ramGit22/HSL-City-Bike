import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import bicycle from '../assets/bicycle.png';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';

const MapData = () => {
  const [stationData, setStationData] = useState({});
  // const { x, y } = stationData;
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:3000/station`);
      setStationData(response.data);
    }
    fetchData();
  }, []);
  console.log('staiondata', stationData);

  if (!stationData || Object.keys(stationData).length === 0) {
    return <div>Loading...</div>;
  }

  const data = stationData.x.map((x, index) => ({
    x,
    y: stationData.y[index],
    name: stationData.stationName[index],
    address: stationData.address[index],
  }));

  const markerIcon = L.icon({
    iconUrl: bicycle,
    iconSize: [51, 51],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });

  return (
    <div className="leaflet-container">
      <NavigationBar />

      <MapContainer
        style={{
          height: '800px',
          // backgroundColor: 'red',
          marginTop: '80px',
          marginBottom: '90px',
        }}
        center={[60.16582, 24.840319]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data ? (
          data.map((station, index) => (
            <Marker
              key={index}
              position={[station.y, station.x]}
              icon={markerIcon}
            >
              <Popup>
                Station Name: {station.name}
                <br />
                Station Address: {station.address}
              </Popup>
            </Marker>
          ))
        ) : (
          <></>
        )}
      </MapContainer>
    </div>
  );
};

export default MapData;
