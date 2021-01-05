import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/home';
import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Create } from './components/create';
import { Update } from './components/update';
import { Read } from './components/read';
import { ReadData } from './components/readData';
import { CreateData } from './components/createData';
import { ReadGin } from './components/readGin';
import { CreateGin } from './components/createGin';
import {Footer} from './components/footer'
import { ReadModal } from './components/readModal';






class App extends Component {
 
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Cocktail Central</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Drinks" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/rum" >Rum Drinks</NavDropdown.Item>
        <NavDropdown.Item href="/vodka">Vodka Drinks</NavDropdown.Item>
        <NavDropdown.Item href="/gin">Gin Drinks</NavDropdown.Item>
        
      </NavDropdown>
              </Nav>
              <Nav>
              <NavDropdown title="Add Drink recipes" id="collasible-nav-dropdown">
          
          
       
        <NavDropdown.Item href="/create">Add a Rum Recipe</NavDropdown.Item>
        <NavDropdown.Item href="/createData">Add a Vodka Recipe</NavDropdown.Item>
        <NavDropdown.Item href="/createGin">Add a Gin Recipe</NavDropdown.Item>
        <NavDropdown.Item href="/readModal">Add a  Recipe</NavDropdown.Item>
       
        
      </NavDropdown>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          
         
          

          <br />


          




          <Switch>

            <Route path='/' component={Home} exact />
            <Route path='/rum' component={Read} exact />
            <Route path='/vodka' component={ReadData}exact />
            <Route path='/gin' component={ReadGin}exact />
            <Route path='/create' component={Create} exact />
            <Route path='/createData' component={CreateData} exact />
            <Route path='/createGin' component={CreateGin} exact />
            <Route path='/update/:id' component={Update} exact></Route>
            <Route path='/readModal' component={ReadModal} exact></Route>
            
          
          
            
            
           
            
          </Switch>
          <div className="page-container">
      <div className="content-wrap">
      
        </div>
       
        </div>
        <Footer/>
        </div>
      </Router>
    );
  }
}
export default App;
