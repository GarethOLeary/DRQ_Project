import React from 'react';
import { DrinksItem } from './drinksItem';

export class Drinks extends React.Component {

    render() {
        return this.props.drinks.map((item) =>{
            return <DrinksItem item={item} ReloadData={this.props.ReloadData}></DrinksItem>
        })
    }
}