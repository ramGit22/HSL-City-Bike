import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import bicycle from '../assets/bicycle.png';

const styles = { backgroundColor: 'red' };
const NavigationBar = () => {
  return (
    <Navbar style={{ backgroundColor: '#007ac9' }} expand="lg">
      <Navbar.Brand href="/">
        {/* <a href="https://www.flaticon.com/free-icons/bike" title="bike icons">Bike icons created by Freepik - Flaticon</a> */}
        <Image
          src={bicycle}
          title="bike icons"
          width="50"
          height="60"
          className="d-inline-block align-top"
          alt="Bicycle logo"
        />
        {/* Journey Planner */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/stationmap" style={{ color: 'white' }}>
              Station Map
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/journey" style={{ color: 'white' }}>
              Journey List
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/station" style={{ color: 'white' }}>
              Station List
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
