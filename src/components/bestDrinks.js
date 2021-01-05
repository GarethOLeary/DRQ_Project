import React from 'react';

import { DrinksItemB } from './drinksItemB';


export class BestDrinks extends React.Component {

    render() {
        return this.props.drinks.map((item) =>{
            
            return <DrinksItemB item={item} ReloadData={this.props.ReloadData}></DrinksItemB>
            
        })

        
    }

    

   
}