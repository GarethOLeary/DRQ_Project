import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "./drinks.css";


export class DrinksItem extends React.Component {

  constructor() {
    super();
    // binds method to on click event 
    this.DeleteDrink = this.DeleteDrink.bind(this);
    this.DeleteVodkaDrink = this.DeleteVodkaDrink.bind(this);
    this.DeleteGinDrink = this.DeleteGinDrink.bind(this);
}

  
DeleteDrink(e) {
  // stops multiple deletes from happening
  e.preventDefault();
  console.log("Delete: " + this.props.item._id);

  // calls the delete and url and passes up the id
  axios.delete("http://localhost:4000/api/drinks/" + this.props.item._id)
      // arrow function invokes method
      .then(() => {
          this.props.ReloadData(); // calls reload data on movies.js
      })
      .catch();
}

DeleteVodkaDrink(e) {
    // stops multiple deletes from happening
    e.preventDefault();
    console.log("Delete: " + this.props.item._id);
  
    // calls the delete and url and passes up the id
    axios.delete("http://localhost:4000/api/vodkadrinks/" + this.props.item._id)
        // arrow function invokes method
        .then(() => {
            this.props.ReloadData(); // calls reload data on movies.js
        })
        .catch();
  }

  DeleteGinDrink(e) {
    // stops multiple deletes from happening
    e.preventDefault();
    console.log("Delete: " + this.props.item._id);
  
    // calls the delete and url and passes up the id
    axios.delete("http://localhost:4000/api/gindrinks/" + this.props.item._id)
        // arrow function invokes method
        .then(() => {
            this.props.ReloadData(); // calls reload data on movies.js
        })
        .catch();
  }


    render() {
        return (
          
         <div className="container">

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={this.props.item.picture}/>
<Card.Body>
  <Card.Title>{this.props.item.name}</Card.Title>
  <Card.Text>
  
  </Card.Text>
</Card.Body>
<ListGroup>
  <ListGroupItem>Cras justo odio</ListGroupItem>
  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
  <ListGroupItem>Vestibulum at eros</ListGroupItem>
</ListGroup>
<Card.Body>
  <Card.Link href="#">Card Link</Card.Link>
  <Card.Link href="#">Another Link</Card.Link>
</Card.Body>
<Link to={"/update/" + this.props.item._id} className="btn btn-primary">Update</Link>
<Button variant="danger" onClick={this.DeleteDrink} onClick={this.DeleteVodkaDrink} onClick={this.DeleteGinDrink}>Delete</Button>
</Card>
         </div>
          
            
        );
    }
}


