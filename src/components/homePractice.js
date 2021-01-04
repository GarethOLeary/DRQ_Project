import React from 'react';
import "./drinks.css";
import Img from './gin.jpg'
import Img1 from './rum.jpg'
import Img2 from './vodka.jpg'
import Img3 from './Drink.png'
import axios from 'axios';



export class HomePractice extends React.Component {


    state = { show: false };
    
    
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

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

    // Post request made to the url and passing object up
    axios.post('http://localhost:4000/api/bestdrinks', newDrink)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
   
}


    render() {

      
        return (
            
            
            <div>
                <h1>Fancy a cocktail?</h1>
            <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={Img}></img>
    <div class="card-body">
      <h5 class="card-title">Gin Recipes</h5>
      <p class="card-text">Keep up to date with your Gin recipes. Update and delete recipes. </p>
      <a class="btn btn-primary" href="/gin">Checkout recipes now!</a>
      <main>
        
          </main>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Img2} ></img>
    <div class="card-body">
      <h5 class="card-title">Vodka Recipes </h5>
      <p class="card-text">Keep up to date with your Vodka recipes. Update and delete recipes.</p>
      <a href="/vodka" class="btn btn-primary">Checkout recipes now!</a>
      <main>
            
           
          </main>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Img1} ></img>
    <div class="card-body">
      <h5 class="card-title">Rum Recipes</h5>
      <p class="card-text">Keep up to date with your Rum recipes. Update and delete recipes.</p>
      <a href="/rum" class="btn btn-primary">Checkout recipes now!</a>
      
                            

          
    </div>
    
  </div>
  
  
</div>

<br></br>

<Modal show={this.state.show} handleClose={this.hideModal}>
              
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
                              value='Add Drink'
                              
                              className='btn btn-primary'></input>
                      </div>
                  </form>
              </Modal>
<input type="image" onClick={this.showModal} src={Img3} ></input>
</div>
        );
    }

    
}


const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <a class="btn btn-primary" onClick={handleClose}>Close</a>
        </section>
      </div>
    );
  };

 

  
  
  //const container = document.createElement("div");
  //document.body.appendChild(container);
  //ReactDOM.render(<HomePractice />, container);
  
  
/*
<img src= {Img} width="200" height="200" />
                <img src= {Img1} width="200" height="200"/>
                <img src= {Img2} width="200" height="200" />*/

              /*  <div className="homeContainer">
                <h1>Fancy a cocktail?</h1>

                
                <img src= {Img} width="200" height="200" />
                <img src= {Img1} width="200" height="200"/>
                <img src= {Img2} width="200" height="200" />
                
            </div>*/