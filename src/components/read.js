import React from 'react';
import { Drinks } from './drinks';
import axios from 'axios';


export class Read extends React.Component {

    constructor() {
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
      drinks:  []
    };

componentDidMount(){
axios.get('http://localhost:4000/api/drinks')
.then((res) => {
    this.setState({drinks: res.data})
    //console.log(res)
})
.catch((error) => {
    console.log(error)
});
}

// gets all the information from the database 
ReloadData() {
    axios.get('http://localhost:4000/api/drinks')
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
                
                <Drinks drinks={this.state.drinks} ReloadData={this.ReloadData}></Drinks>
            </div>
        );
    }
}