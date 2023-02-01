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

  // const data = [
  //   {
  //     x: 24.840319,
  //     y: 60.16582,
  //   },
  //   {
  //     x: 24.827467,
  //     y: 60.171524,
  //   },
  //   {
  //     x: 24.805758,
  //     y: 60.168266,
  //   },
  // ];
  // const data = {x: [24.840319,24.827467,24.805758], y: [60.16582,60.171524,60.168266]}
  const data = stationData.x.map((x, index) => ({
    x,
    y: stationData.y[index],
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
          data.map((station) => (
            <Marker position={[station.y, station.x]} icon={markerIcon} />
            // <Marker position={[y, x]} icon={markerIcon} />
          ))
        ) : (
          <></>
        )}
      </MapContainer>
    </div>
  );
};

export default MapData;
