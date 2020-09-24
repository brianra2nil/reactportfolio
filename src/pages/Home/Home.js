import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import picofme from "./assets/picofme.png"
import "./home.css"
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Alert } from 'reactstrap';

const Home = () => {
// const Example = (props) => {
  return (
    <div>
      
      <br/>
      <Row xs="3">
       <Col >
      <Card >
        <CardImg className="cardpic" top width="100%" src={picofme} alt="Profile Pic" />
        <CardBody>
          <CardTitle>Brian Ratunil</CardTitle>
          <hr/>
          <CardSubtitle>951-837-6791</CardSubtitle>
          <hr/>
          <CardSubtitle>brianra2nil@hotmail.com</CardSubtitle>
          <hr/>
          <CardText>Graduated in October 2020 from the UC Irvine coding bootcamp.  Looking for an opportunity to apply my newly found skills as a web developer.</CardText>
          
        </CardBody>
      </Card>
      </Col>

      <Col >
      <ListGroup>
      <ListGroupItem className="heading">Skillset</ListGroupItem>
      <ListGroupItem>HTML/CSS</ListGroupItem>
      <ListGroupItem>JavaScript / jQuery</ListGroupItem>
      <ListGroupItem>SQL / NoSQL Databases (MySql and Mongo)</ListGroupItem>
      <ListGroupItem>Node.js / Express</ListGroupItem>
      <ListGroupItem>React.js</ListGroupItem>
      <ListGroupItem>Deployment</ListGroupItem>
    </ListGroup>
      </Col>
      <Col >
      <ListGroup>
      <ListGroupItem className="heading">Hobbies</ListGroupItem>
      <ListGroupItem>Building and Customizing Desktop PCs</ListGroupItem>
      <ListGroupItem>Biking and Hiking</ListGroupItem>
      <ListGroupItem>Basketball and the NBA</ListGroupItem>
      <ListGroupItem>Creating apps that help automate our lives</ListGroupItem>
      <ListGroupItem>Video games and sci-fi/action movies</ListGroupItem>
      <ListGroupItem>Mining cryptocurrency like Bitcoin and Ethereum</ListGroupItem>
    </ListGroup>
      </Col>
      </Row>
      <br/>
      <Alert color="dark">
        I previously worked in the freight and logistics industry for over 15 years starting out as a truck driver and working my way up through promotions such as a Dock Supervisor, Dispatcher and Freight Operations Manager.  <br/>
        I was part of a deployment team when the company decided to use mobile handhelds that employees can use in the field and connect with the network and office staff.  I was asked to test, and deploy the software. <br/>
        I have always had an interest in computer software and hardware.  I enjoy creating applications that people can use to either have fun and/or help improve their lives easier through automation. <br/>
        I feel a great sense of accomplishment creating and designing something from scratch, that people can use anywhere they have a network connection.
        <br/>
        <br/>
      To learn more about me click on the links below for my Resume, Github, LinkedIn and email.
      </Alert>
    </div>
  );
};

// export default Example;
export default Home;