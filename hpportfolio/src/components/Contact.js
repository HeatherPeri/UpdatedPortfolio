import React from 'react';
import { Badge } from 'reactstrap';
import heather from './images/heather.jpeg';
import { Row, Col, Container } from 'reactstrap';
import Homestyle from './Homestyle/Homestyle';


function Contact() {
  return (
    <div>
      <Homestyle>
        <Container>
            <Row>
                <Col size="md-6">
<h4 className="text-center">Hi, I'm Heather, welcome to my portfolio! </h4>
    <br></br> 
    <h5>A little about me,
    I enjoy frontend web development with foundational knowledge on backend. 
    I have two dogs, Winston and Tucker who are like my children and an amazing, 
    supportive husband.  I love to travel, the picture you see here was captured in 
    Limerick, Ireland one of my all-time favorite places in the world.
    Anything else you'd like to know? Check out my contact information, lets connect! </h5>
</Col>
    <Col size="md-6">
    <img src={heather} alt="Heather" Style="height:400px"/>
</Col>


<Col size="md-6">
<h4 className="text-center">Connect With Me:</h4>
<h5 className="text-center">
<i class="fa fa-map-pin"></i> Raleigh, NC <br></br><br></br>
<i class="fa fa-envelope-o" ></i> <Badge href ="mailto: heatherhperi@gmail.com" color="light">Email</Badge> <br></br><br></br>
<i class="fa fa-github"></i> <Badge href="https://github.com/HeatherPeri" color="light">Github</Badge><br></br><br></br>
<i class="fa fa-linkedin-square"></i><Badge href=" https://www.linkedin.com/in/heather-peri-648023134/ " color="light">LinkedIn</Badge><br></br><br></br>
<i class="fa fa-file-o"></i>  <Badge href="#" color="light">Resume</Badge><br></br>

</h5>

</Col>
</Row>
</Container>
</Homestyle>
    </div>
  );
}

export default Contact;