import React from 'react';
import Img from './gin.jpg'
import axios from 'axios';
import Img2 from './vodka.jpg'
import "./drinks.css";

export class Home extends React.Component {
  constructor() {
    // invoke react.component class
    super();
    this.state = {

      Name: '',
      Base: '',
      Ingredients: '',
      Picture: '',
      show: false

    };
    // binds the events to this instance of the class
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeBase = this.onChangeBase.bind(this);
    this.onChangeIngredients = this.onChangeIngredients.bind(this);
    this.onChangePicture = this.onChangePicture.bind(this);
  }
  // updates your state with the setState() method to change the value of your show property to true when a user opens the modal 
  showModal = () => {
    this.setState({ show: true });

  };

  //close the modal and change the value in your show property to false.
  hideModal = () => {
    this.setState({ show: false });

  };

  // methods that takes argument and updates the state when the value changes
  onChangeName(e) {
    this.setState({
      Name: e.target.value
    });
  }

  onChangeBase(e) {
    this.setState({
      Base: e.target.value
    });
  }

  onChangeIngredients(e) {
    this.setState({
      Ingredients: e.target.value
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
      + this.state.Base + " " + this.state.Ingredients + " "
      + this.state.Picture);

    const newDrink = {
      name: this.state.Name,
      base: this.state.Base,
      ingredients: this.state.Ingredients,
      picture: this.state.Picture
    }
    // Post request made to the url and passing object up
    axios.post('http://localhost:4000/api/cocktails', newDrink)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  
  render() {
    return (

      <main>
        <div class="card-body">
          <h1 class="card-title">Welcome to Recipe central</h1>
          <h5 class="card-text">Fancy a Cocktail? </h5>

        </div>
        <div class="card-group">
          <div class="card">
            <img class="card-img-top" src={Img} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">Recipe Central </h5>
              <p class="card-text">Keep to up to date with all your recipes.Update your recipes whenever you want</p>
              <a href="/readDrinks" class="btn btn-primary">Checkout recipes now!</a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={Img2} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">Add Recipes</h5>
              <p class="card-text">Great place to come if you are in need of a drink</p>
              <a onClick={this.showModal} class="btn btn-primary">Add a new Recipe</a>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name of Drink: </label>
              <input type='text'
                className='form-control'
                value={this.state.Name}
                onChange={this.onChangeName}></input>
            </div>
            <div className="form-group">
              <label>Base Liquor: </label>
              <input type='text'
                className='form-control'
                value={this.state.Base}
                onChange={this.onChangeBase}></input>
            </div>
            <div className="form-group">
              <label>Ingredients: </label>
              <input type='text'
                className='form-control'
                value={this.state.Ingredients}
                onChange={this.onChangeIngredients}></input>
            </div>
            <div className='form-group'>
              <label>Add a picture of Drink: </label>
              <textarea type='text'
                className='form-control'
                value={this.state.Picture}
                onChange={this.onChangePicture}>

              </textarea>
            </div>
            <div className='form-group'>
              <input type='submit'
                value='Add your Recipe!'
                className='btn btn-primary'></input>
            </div>
          </form>

        </Modal>

      </main>


    )
  }
}
// component that takes 3 parameters
//return statement passes the argument children which is a reference to the functionality of opening and closing the modal
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
          </button>
      </section>
    </div>
  );
};