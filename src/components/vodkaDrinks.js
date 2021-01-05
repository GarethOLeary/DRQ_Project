import React from 'react';

import { DrinksItemV } from './drinksItemV';


export class VodkaDrinks extends React.Component {

    render() {
        return this.props.drinks.map((item) =>{
            
            return <DrinksItemV item={item} ReloadData={this.props.ReloadData}></DrinksItemV>
            
        })

        
    }

    

   
}