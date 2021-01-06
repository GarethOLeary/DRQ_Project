import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ListGroup from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/Card';
import "./drinks.css";


export class DrinksItem extends React.Component {
    constructor() {
        super();
        // binds method to on click event 
        this.DeleteDrink = this.DeleteDrink.bind(this);

    }
    DeleteDrink(e) {
        //stops multiple deletes from happening
        e.preventDefault();
        console.log("Delete: " + this.props.drink._id);


        // calls the delete and url and passes up the id
        axios.delete("http://localhost:4000/api/cocktails/" + this.props.drink._id)
            // arrow function invokes method
            .then(() => {
                this.props.ReloadData(); // calls reload data on movies.js
            })
            .catch();

    }


    render() {
        return (
            // displays data from drinks
            // Link added for the url of application with update button
            // button with on click event that invokes delete movie method 
            <div className="container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.drink.picture} />
                    <Card.Body>
                        <Card.Title w3-container w3-blue>{this.props.drink.name}</Card.Title>
                        <Card.Text>
                            {this.props.drink.base}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem>{this.props.drink.ingredients}</ListGroupItem>

                    </ListGroup>
                    <Link to={"/update/" + this.props.drink._id} className="btn btn-primary">Update</Link>
                    <Button variant="danger" onClick={this.DeleteDrink} >Delete</Button>

                </Card>
            </div>
        );
    }
}