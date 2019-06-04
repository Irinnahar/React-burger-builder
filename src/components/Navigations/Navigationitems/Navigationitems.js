import React from 'react';
import './Navigationitems.css';
import NavigationItem from '../Navigationitem/Navigationitem';

const NavigationItems = (props) => {
    return (
        <div>
            <ul className="NavigationItems">
                <NavigationItem
                    link="/"
                    active>
                    Burgerbuilder</NavigationItem>
                <NavigationItem
                    link="/">
                    Checkout</NavigationItem>
            </ul>
        </div>
    )
}

export default NavigationItems;