import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import "./app.css"




const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>
        <nav>
          <Navbar color="light" light expand="md">
            <NavbarBrand>Brian Ratunil</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/reactportfolio">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/reactportfolio/portfolio">Portfolio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/reactportfolio/contact">Contact</NavLink>
                </NavItem>

              </Nav>

            </Collapse>
          </Navbar>
        </nav>


        <Switch>
          <Route exact path="/reactportfolio" component={Home} />
          <Route path="/reactportfolio/portfolio" component={Portfolio} />
          <Route path="/reactportfolio/contact" component={Contact} />
        </Switch>


      </div>
      <div className="fixed-bottom">
        <Navbar color="light" light expand="md">
          <NavbarBrand >Brian Ratunil</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink target="_blank"
                  href="https://drive.google.com/file/d/1n2uYdPr-E6yxJLkdQUHKezOL0GprNJzN/view?usp=sharing2">My Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://github.com/brianra2nil">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://www.linkedin.com/in/brian-ratunil-0738b9102">LinkedIn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="mailto:brianra2nil@hotmail.com">Email Me</NavLink>
              </NavItem>


            </Nav>
            <NavbarText>&#169; 2020 - Brian Ratunil</NavbarText>
          </Collapse>
        </Navbar>
      </div>

    </Router>

  )
}

export default App

