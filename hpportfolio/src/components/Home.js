import React from 'react';
import Homestyle from './Homestyle/Homestyle';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import { Row, Col, Container, Button } from 'reactstrap';
import { Badge } from 'reactstrap';



function Home() {
  return (
    <div>
      <Homestyle 
      backgroundImage="https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80">
        <h1>HEATHER PERI</h1>
        <h2><b>personal portfolio</b></h2>
        <br></br>
        {/* </Homestyle> */}
        <br></br><br></br>
<h4 className="text-center">Connect With Me:</h4>
<h5 className="text-center">
<i class="fa fa-map-pin"></i> Raleigh, NC <br></br>
<i class="fa fa-envelope-o" ></i> <Badge href ="mailto: heatherhperi@gmail.com" color="light">Email</Badge> <br></br>
<i class="fa fa-github"></i> <Badge href="https://github.com/HeatherPeri" color="light">Github</Badge><br></br>
<i class="fa fa-linkedin-square"></i><Badge href=" https://www.linkedin.com/in/heather-peri-648023134/ " color="light">LinkedIn</Badge><br></br>
<i class="fa fa-file-o"></i>  <Badge href="#" color="light">Resume</Badge><br></br>

</h5>
</Homestyle>

      
      </div>

  );
}

export default Home;