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
            { controls.map(control => {
                return (
                <Buildcontrol 
                    label = {control.label} 
                    key = {control.type}
                    remove = {() => props.removeIngredient(control.type)}
                    added = {() => props.addingreient(control.type)}
                    disabled = {props.disabled}>
                </Buildcontrol>
                )
            })}
        </div>
    )
}

export default Buildcontrols;