import React from 'react';
import "./drinks.css";
import Img from './gin.jpg'
import Img1 from './rum.jpg'
import Img2 from './vodka.jpg'

export class Home extends React.Component {

    render() {

      
        return (
            <div>
                <h1>Fancy a cocktail?</h1>
            <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={Img}></img>
    <div class="card-body">
      <h5 class="card-title">Gin Recipes</h5>
      <p class="card-text">Keep up to date with your Gin recipes. </p>
      <a href="/createGin" class="btn btn-primary">Add a Gin Recipe</a>
    
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Img2} ></img>
    <div class="card-body">
      <h5 class="card-title">Vodka Recipes </h5>
      <p class="card-text">Keep up to date with your Vodka recipes.</p>
      <a href="/createData" class="btn btn-primary">Add a Vodka Recipe</a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Img1} ></img>
    <div class="card-body">
      <h5 class="card-title">Rum Recipes</h5>
      <p class="card-text">Keep up to date with your Rum recipes.</p>
      <a href="/create" class="btn btn-primary">Add Rum Recipe</a>
    </div>
  </div>
</div>
</div>

        );
    }
}
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