import React from 'react';
import { DrinksItem } from './drinksItem'

export class Drinks extends React.Component {
    // map function splits collections into each section - individual drinks
    // passes reload data method to all its children
    render() {
        return this.props.drinks.map((drink) => {
            return <DrinksItem drink={drink} ReloadData={this.props.ReloadData}></DrinksItem>
        })
    }
}