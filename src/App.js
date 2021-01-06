import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Update } from './components/update';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CreateDrinks } from './components/createDrinks';
import { ReadDrinks } from './components/readDrinks';
import { Home } from './components/home';

// class that inherits react component 
// Switch - added routing with navigation
// added Navbar
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Recipe Central</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">


              </Nav>
              <a class="navbar-brand" href="/readDrinks">Recipes</a>
            </Navbar.Collapse>
          </Navbar>


          <br />

          <Switch>


            <Route path='/readDrinks' component={ReadDrinks} exact />
            <Route path='/createDrinks' component={CreateDrinks} exact />
            <Route path='/update/:id' component={Update} exact></Route>
            <Route path='/' component={Home} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;