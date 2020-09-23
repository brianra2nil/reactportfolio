import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import burger from "./assets/burger.png"
import codequiz from "./assets/codequiz.png"
import coview19 from "./assets/coview19.png"
import employeesummary from "./assets/employeesummary.png"
import notetaker from "./assets/notetaker.png"
import pokemon from "./assets/pokemon.png"

import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Alert } from 'reactstrap';

const Portfolio = () => {
  return (
    <>
    <h1>A short list of some of my projects</h1>
    <Row xs="3">
       <Col >
      <Card >
        <CardImg className="img-fluid" top width="100%" src={burger} alt="burgerapp" />
        <CardBody>
          <CardTitle>Burger App</CardTitle>
          <hr/>
          <CardSubtitle><p>Link to <a href="https://github.com/brianra2nil/burger">Github URL</a></p></CardSubtitle>
          <hr/>
          <CardSubtitle><a class="btn btn-primary btn-lg" href="https://whispering-retreat-82332.herokuapp.com/" target="_blank" role="button">Deployed Site (Heroku)</a></CardSubtitle>
          <hr/>
          <CardText>If you love burgers, you can list all the burgers you want to try on this app and then click on Devour it! to keep a list of burgers you tried.  Use of MySQL databases to get, put, post and delete entries into the database and render into the frontend.  Also deployed on Heroku.</CardText>
          
        </CardBody>
      </Card>
      </Col>

      <Col >
      <Card >
        <CardImg className="img-fluid" top width="100%" src={codequiz} alt="burgerapp" />
        <CardBody>
          <CardTitle>Burger App</CardTitle>
          <hr/>
          <CardSubtitle><p>Link to <a href="https://github.com/brianra2nil/burger">Github URL</a></p></CardSubtitle>
          <hr/>
          <CardSubtitle><a class="btn btn-primary btn-lg" href="https://whispering-retreat-82332.herokuapp.com/" target="_blank" role="button">Deployed Site (Heroku)</a></CardSubtitle>
          <hr/>
          <CardText>If you love burgers, you can list all the burgers you want to try on this app and then click on Devour it! to keep a list of burgers you tried.  Use of MySQL databases to get, put, post and delete entries into the database and render into the frontend.  Also deployed on Heroku.</CardText>
          
        </CardBody>
      </Card>
      </Col>

      </Row>
    </>
  )
}

export default Portfolio
