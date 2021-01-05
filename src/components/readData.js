import React from 'react';
import { VodkaDrinks } from './vodkaDrinks';
import axios from 'axios';

export class ReadData extends React.Component {

    constructor() {
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
      drinks:  []
    };

componentDidMount(){
axios.get('http://localhost:4000/api/vodkadrinks')
.then((res) => {
    this.setState({drinks: res.data})
    console.log(res)
})
.catch((error) => {
    console.log(error)
});
}

// gets all the information from the database 
ReloadData() {
    axios.get('http://localhost:4000/api/vodkadrinks')
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
            <div>
                <h1>Vodka Drinks</h1>
                <VodkaDrinks drinks={this.state.drinks} ReloadData={this.ReloadData}></VodkaDrinks>
            </div>
        );
    }
}