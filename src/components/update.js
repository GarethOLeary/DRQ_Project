import React from 'react';
import axios from 'axios';

export class Update extends React.Component {

    constructor() {
        // invoke react.component class
        super();

        // binds the events to this instance of the class
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePicture = this.onChangePicture.bind(this);

        this.state = {
            Name: '',
            Picture: ''
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        // pulled out id of document and put it as part of url
        // called get request 
        // updates the state
        axios.get('http://localhost:4000/api/drinks/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Name: response.data.name,
                    Picture: response.data.picture
                })
            })
            .catch((error) => {
                console.log(error);
            });
            axios.get('http://localhost:4000/api/vodkadrinks/' + this.props.match.params.id)
                .then(response => {
                    this.setState({
                        _id: response.data._id,
                        Name: response.data.name,
                        Picture: response.data.picture
                    })
                })
                .catch((error) => {
                    console.log(error);
                });

                axios.get('http://localhost:4000/api/gindrinks/' + this.props.match.params.id)
                .then(response => {
                    this.setState({
                        _id: response.data._id,
                        Name: response.data.name,
                        Picture: response.data.picture
                    })
                })
                .catch((error) => {
                    console.log(error);
                });

                axios.get('http://localhost:4000/api/bestdrinks/' + this.props.match.params.id)
                .then(response => {
                    this.setState({
                        _id: response.data._id,
                        Name: response.data.name,
                        Picture: response.data.picture
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
            
        }

        
        
    // methods that takes argument and updates the state when the value changes
    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }


    onChangePicture(e) {
        this.setState({
            Picture: e.target.value
        });
    }



    onSubmit(e) {
        // method that stops the button calling multiple times
        e.preventDefault();
        // displays to the screen
        alert("Drink: " + this.state.Name + " "
            
            + this.state.Picture);

        const newDrink = {
            name: this.state.Name,
            picture: this.state.Picture
        }

        // calling put request on the server 
        // passes up newMovie object
        axios.put('http://localhost:4000/api/drinks/' + this.state._id, newDrink)
            .then(res => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            });

            axios.put('http://localhost:4000/api/vodkadrinks/' + this.state._id, newDrink)
            .then(res => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            });

            axios.put('http://localhost:4000/api/gindrinks/' + this.state._id, newDrink)
            .then(res => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            });

            axios.put('http://localhost:4000/api/bestdrinks/' + this.state._id, newDrink)
            .then(res => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            });

           

        // Post request made to the url and passing object up
     /*   axios.post('http://localhost:4000/api/drinks', newDrink)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
       */
    }

    render() {
        // onSubmit form to invoke onSubmit method
        // input control to add text
        // set the values
        // onChange is to detect when the value of an input element changes
        // button added
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <lable>Name of Drink: </lable>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}></input>
                    </div>
                    
                    <div className='form-group'>
                        <label>Add picture for drink: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Picture}
                            onChange={this.onChangePicture}>

                        </textarea>
                    </div>
                    <div className='form-group'>
                        <input type='submit'
                            value='Update Drink'
                            className='btn btn-primary'></input>
                    </div>
                </form>



            </div>
        );
    }
}