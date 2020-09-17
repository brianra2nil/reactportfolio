import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Portfolio'
import Login from './pages/Contact'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Portfolio">Portfolio</Link>
          <Link to="/Contact">Contact</Link>
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
