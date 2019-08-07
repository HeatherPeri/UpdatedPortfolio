import React from 'react';
import { Badge } from 'reactstrap';
import heather from './images/heather.jpeg';
import { Row, Col, Container } from 'reactstrap';


function Contact() {
  return (
    <div>
        <Container>
            <Row>
                <Col size="md-6">
<h5 className="text-center">Hi, I'm Heather, welcome to my portfolio! 
    <br></br> A little about Me <br></br>
    I enjoy frontend web development with foundational knowledge on backend. <br></br>
    I have two dogs, Winston and Tucker who are like my children and an amazing, 
    supportive husband. <br></br> I love to travel, the picture you see here was captured in 
    Limerick, Ireland one of my all-time favorite places in the world (and I'm holding 
    one of my all-time favorite things in the world: COFFEE) <br></br>
    Anything else you'd like to know? Check out my contact information, lets connect! </h5>
</Col>
    <Col size="md-6">
    <img src={heather} alt="Logo" Style="height:400px"/>
</Col>


<Col size="md-6">
<h4 className="text-center">Connect With Me:</h4>
<h4 className="text-center">
<i class="fa fa-map-pin"></i> Raleigh, NC <br></br>
<i class="fa fa-envelope-o" ></i> <Badge href ="mailto: heatherhperi@gmail.com" color="light">Email</Badge> <br></br>
<i class="fa fa-github"></i> <Badge href="https://github.com/HeatherPeri" color="light">Github</Badge><br></br>
<i class="fa fa-linkedin-square"></i><Badge href=" https://www.linkedin.com/in/heather-peri-648023134/ " color="light">LinkedIn</Badge><br></br>
<i class="fa fa-file-o"></i>  <Badge href="#" color="light">Resume</Badge><br></br>

</h4>

</Col>
</Row>
</Container>
    </div>
  );
}

export default Contact;