import React from 'react';

import './Buildcontrols.css';
import Buildcontrol from './Buildcontrol/Buildcontrol';

const Buildcontrols = (props) => {
    const controls = [
        {label : 'Salad', type : 'salad'},
        {label : 'Bacon', type : 'bacon'},
        {label : 'Cheese', type : 'cheese'},
        {label : 'Meat', type : 'meat'}
    ]
    return (
        <div className ="Buildcontrols">
            <h5>Price : <strong>${props.price.toFixed(2)}</strong> </h5>
            { controls.map(control => {
                return (
                <Buildcontrol 
                    label = {control.label} 
                    key = {control.type}
                    remove = {() => props.removeIngredient(control.type)}
                    added = {() => props.addingreient(control.type)}
                    disabled = {props.disabled[control.type]}>
                </Buildcontrol>
                )
            })}
            <button 
                className = "OrderButton" 
                disabled = {props.disableOrder}
                onClick = {props.showModal}>Order Now</button>
        </div>
    )
}

export default Buildcontrols;