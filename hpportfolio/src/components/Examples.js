import React from 'react';
import { Row, Col, Container, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

function Examples() {
  return (
<div>

    <h1 className="text-center">The Latest</h1>
    <br></br>
    <h3 className="text-center"> Full Stack </h3>
    <Container>

    
    <Row>
        <Col size="md-6">
        <Card>
        <CardImg top width="50%" src="https://images.unsplash.com/photo-1564326680392-26c9e5220866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" Style="height:500px" alt="Card image cap" />
        <CardBody className="text-center">
          <CardTitle>Astrono(ME)</CardTitle>
          <CardSubtitle>Bootstrap, MySQL </CardSubtitle>
          <CardText>In this group based project my controbutions include but are not limited to:
                    Creating the events page, UI responsiveness</CardText>

          <Button href="https://github.com/HeatherPeri/Project2.git">Github</Button> 
          <Button href="https://see-the-stars.herokuapp.com/index.html">Deployed Site</Button>

        </CardBody>
        </Card>
        </Col>

        <Col size="md-6">
            <Card>
        <CardImg top width="50%" src="https://images.unsplash.com/photo-1564326680392-26c9e5220866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" Style="height:500px" alt="Card image cap" />
        <CardBody className="text-center">
          <CardTitle>Animation</CardTitle>
          <CardSubtitle>Javascript, Front end responsiveness</CardSubtitle>
          <CardText>10 buttons all linked to a different giphy API. Once the buttons are clicked gifs are loaded to page. The gifs respond to click functions to start and stop the animations</CardText>
          <Button href="https://github.com/HeatherPeri/Animate">Github <i class="fa fa-github"></i></Button>
        </CardBody>
        </Card>
        </Col>
    </Row>
<br></br>
    <Row>
        <Col size="md-6">
        <Card>
        <CardImg top width="50%" src="https://images.unsplash.com/photo-1564326680392-26c9e5220866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" Style="height:500px" alt="Card image cap" />
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
        <CardImg top width="50%" src="https://images.unsplash.com/photo-1564326680392-26c9e5220866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" Style="height:500px" alt="Card image cap" />
        <CardBody className="text-center">
          <CardTitle>Samaritan</CardTitle>
          <CardSubtitle>React, reactstrap, MySQL</CardSubtitle>
          <CardText>Working progress application</CardText>
          <Button href="https://github.com/HeatherPeri/Samaritan">Github <i class="fa fa-github"></i></Button>
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
        <CardImg top width="50%" src="https://images.unsplash.com/photo-1564326680392-26c9e5220866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" Style="height:500px" alt="Card image cap" />
        <CardBody className="text-center">
          <CardTitle>Salon Synchronicity</CardTitle>
          <CardSubtitle>Created full website </CardSubtitle>
          <CardText>more info on the project</CardText>
          <Button href="https://salonsynchronicity.com/">Browse Site</Button>
        </CardBody>
        </Card>
        </Col>

        <Col size="md-6">
            <Card>
        <CardImg top width="50%" src="https://images.unsplash.com/photo-1564326680392-26c9e5220866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" Style="height:500px" alt="Card image cap" />
        <CardBody className="text-center">
          <CardTitle>LN Organix</CardTitle>
          <CardSubtitle>Plug-In + Inventory</CardSubtitle>
          <CardText>helped with plug-ins and keeping up with inventory</CardText>
          <Button href="https://www.lnorganix.com/">Browse Site</Button>
        </CardBody>
        </Card>
        </Col>

    </Row>
    </Container>
</div>
  );
}

export default Examples;