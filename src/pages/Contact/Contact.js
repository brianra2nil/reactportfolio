import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
    <Jumbotron>
      <h1 className="display-3">Contact Info</h1>
      <p className="lead">Brian Ratunil, Phone:  951-837-6791</p>
      <hr className="my-2" />
      <p>You may reach me via phone or email</p>
      <p className="lead"></p>
      
      <Link to="mailto:brianra2nil@hotmail.com" > Email Me </Link> 
    
    </Jumbotron>
  </div>
  )
}

export default Contact
