import React from 'react';
import Homestyle from './Homestyle/Homestyle';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import { Row, Col, Container, Button } from 'reactstrap';
import { CSS } from '../'



function Home() {
  return (
    <div>
      <Homestyle backgroundImage="https://images.unsplash.com/photo-1562521778-f29a49da915a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80">
        <h1>HEATHER PERI</h1>
        <h2><b>personal portfolio</b></h2>
        <br></br>

      </Homestyle>
      </div>

  );
}

export default Home;