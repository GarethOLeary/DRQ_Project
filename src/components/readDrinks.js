import React from 'react';
import { Drinks } from './drinks';
import axios from 'axios';

export class ReadDrinks extends React.Component {
    constructor() {
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        drinks: []

    };

    componentDidMount() {
        // retrieves information from json file
        axios.get('http://localhost:4000/api/cocktails')
            .then(
                // setting data to movies array
                (response) => {
                    this.setState({ drinks: response.data })
                }

            )
            // logging error to console if any problems
            .catch((error) => {
                console.log(error)
            });
    }

    ReloadData() {
        axios.get('http://localhost:4000/api/cocktails')
            .then(
                // setting data to movies array
                (response) => {
                    this.setState({ drinks: response.data })
                }
            )
            // logging error to console if any problems
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            // passes data from this component to our drinks component
            <main>
                <div class="header">
                    <h1>Update,Delete and enjoy your favourite recipes</h1>
                </div>
                <br></br>
                <div>
                    <Drinks drinks={this.state.drinks} ReloadData={this.ReloadData}></Drinks>
                </div>
            </main>
        );
    }
}