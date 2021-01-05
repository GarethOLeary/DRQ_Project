import React from 'react';

import { DrinksItemG } from './drinksItemG';


export class GinDrinks extends React.Component {

    render() {
        return this.props.drinks.map((item) =>{
            
            return <DrinksItemG item={item} ReloadData={this.props.ReloadData}></DrinksItemG>
            
        })

        
    }

    

   
}