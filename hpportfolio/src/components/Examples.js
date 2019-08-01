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
          <CardTitle>First Project</CardTitle>
          <CardSubtitle>Info about first project</CardSubtitle>
          <CardText>more info on the project</CardText>
          <Button>Github</Button>
        </CardBody>
        </Card>
        </Col>

        <Col size="md-6">
            <Card>
        <CardImg top width="50%" src="https://images.unsplash.com/photo-1564326680392-26c9e5220866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" Style="height:500px" alt="Card image cap" />
        <CardBody className="text-center">
          <CardTitle>First Project</CardTitle>
          <CardSubtitle>Info about first project</CardSubtitle>
          <CardText>more info on the project</CardText>
          <Button>Github</Button>
        </CardBody>
        </Card>
        </Col>
    </Row>

    <Row>
        <Col size="md-6">
        <Card>
        <CardImg top width="50%" src="https://images.unsplash.com/photo-1564326680392-26c9e5220866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" Style="height:500px" alt="Card image cap" />
        <CardBody className="text-center">
          <CardTitle>First Project</CardTitle>
          <CardSubtitle>Info about first project</CardSubtitle>
          <CardText>more info on the project</CardText>
          <Button>Github</Button>
        </CardBody>
        </Card>
        </Col>

        <Col size="md-6">
            <Card>
        <CardImg top width="50%" src="https://images.unsplash.com/photo-1564326680392-26c9e5220866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" Style="height:500px" alt="Card image cap" />
        <CardBody className="text-center">
          <CardTitle>First Project</CardTitle>
          <CardSubtitle>Info about first project</CardSubtitle>
          <CardText>more info on the project</CardText>
          <Button>Github</Button>
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
          <Button>Go To Site</Button>
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
          <Button>Github</Button>
        </CardBody>
        </Card>
        </Col>

    </Row>
    </Container>
</div>
  );
}

export default Examples;