import React, { useState }from 'react'
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

const App = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>
        <nav>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="">Brian Ratunil</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contact">Contact</NavLink>
            </NavItem>
            
          </Nav>
          
        </Collapse>
      </Navbar>
        </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      </div>
    </Router>
  )
}

export default App
