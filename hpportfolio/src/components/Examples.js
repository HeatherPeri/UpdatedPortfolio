import React from 'react';
import Homestyle from './Homestyle/Homestyle';

import { Row, Col, Container, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
    import salon from './images/salon.jpeg';
    import samaritan from './images/samaritan.jpeg';
    import bamazon from './images/bamazon.jpeg';
    import updatedast from './images/updatedast.jpeg';
    import animate from './images/animate.jpeg';
    import ln from './images/ln.jpeg';

function Examples() {
  return (
<div>
<Homestyle>
    <h3 className="text-center">The Latest</h3>
    <br></br>
    <h3 className="text-center"> Full Stack </h3>
    <Container>

    
    <Row>
        <Col size="md-6">
        <Card>
        <img src={updatedast} alt="Logo" Style="height:230px"/>
        <CardBody className="text-center">
          <CardTitle>Astrono(ME)</CardTitle>
          <CardSubtitle>Javascript, JQuery, Bootstrap, MySQL </CardSubtitle>
          <CardText>Fun and educational way for a user to view everything related to space exploration without leaving Earth. Search for current stars, asteroids, and astronauts that are currently in space. On the events page, the user can create a specific upcoming event, or view the list of upcoming asteroids. This site showcases the previously unknown and unseen parts of space.</CardText>

          <Button href="https://github.com/HeatherPeri/Project2.git">Github</Button> 
          <Button href="https://see-the-stars.herokuapp.com/index.html">Deployed Site</Button>

        </CardBody>
        </Card>
        </Col>
        <Col size="md-6">
            <Card>
            <img src={samaritan} alt="Logo" Style="height: 230px"/>
        <CardBody className="text-center">
          <CardTitle>Samaritan</CardTitle>
          <CardSubtitle>React, reactstrap, MySQL</CardSubtitle>
          <CardText>Currently working on this application.  There are two log-ins for 
            two different audiences, volunteers and non-profits.  The volunteers can sign-up
            for events and look up non-profits.  The non-profits can post events and text the 
            volunteers of upcoming events. 
          </CardText>
          <Button href="https://github.com/HeatherPeri/Samaritan">Github <i class="fa fa-github"></i></Button>
        </CardBody>
        </Card>
        </Col>
    </Row>
<br></br>
    <Row>
        <Col size="md-6">
        <Card>
        <img src={bamazon} alt="Logo" Style="height:250px"/>
        <CardBody className="text-center">
          <CardTitle>Bamazon</CardTitle>
          <CardSubtitle>MySQL database </CardSubtitle>
          <CardText>This application runs for two seperate sides, the consumer and manager. The consumer can see what products are listed, buy in multiples and when the item is purchased the number of items are removed. 
              In the manager side they can add inventory to existing items or add new items to the list.
          </CardText>
          <Button href="https://github.com/HeatherPeri/bamazon">Github <i class="fa fa-github"></i></Button>

        </CardBody>
        </Card>
        </Col>

        <Col size="md-6">
            <Card>
            <img src={animate} alt="Logo" Style="height:250px"/>
        <CardBody className="text-center">
          <CardTitle>Animation</CardTitle>
          <CardSubtitle>Javascript, Front end responsiveness</CardSubtitle>
          <CardText>10 buttons all linked to a different giphy API. Once the buttons are clicked gifs are loaded to page. The gifs respond to click functions to start and stop the animations</CardText>
          <Button href="https://github.com/HeatherPeri/Animate">Github <i class="fa fa-github"></i></Button>
        </CardBody>
        </Card>
        </Col>


    </Row>
    </Container>
    <br></br><br></br>
      <Container>
      <h3 className="text-center"> WordPress </h3>
      <Row>
        <Col size="md-6">
        <Card>
        <img src={salon} alt="Logo" Style="height:250px"/>
        <CardBody className="text-center">
          <CardTitle>Salon Synchronicity</CardTitle>
          <CardSubtitle>Designed and created full website </CardSubtitle>
          <CardText>Met with salon owner to go over ideal look of the website. Gave advise what 
            she would need and what look we could achieve.  Taught the owner how she can create
            and update blog posts and upcoming events.  WordPress is a great tool for website owners
            who want to have control of day to day content.
          </CardText>
          <Button href="https://salonsynchronicity.com/">Browse Site</Button>
        </CardBody>
        </Card>
        </Col>

        <Col size="md-6">
            <Card>
            <img src={ln} alt="Logo" Style="height:250px"/>
        <CardBody className="text-center">
          <CardTitle>LN Organix</CardTitle>
          <CardSubtitle>Plug-In + Inventory</CardSubtitle>
          <CardText>Gave advice on what plug-ins to use and updated inventory items and quantities.<br></br>
          </CardText>
          <Button href="https://www.lnorganix.com/">Browse Site</Button>
        </CardBody>
        </Card>
        </Col>

    </Row>
    </Container>
    </Homestyle>
</div>
  );
}

export default Examples;