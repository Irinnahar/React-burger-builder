import React from 'react';
import './Buildcontrol.css';

const Buildcontrol = (props) => {
    return (
        <div className = "BuildControl">
            <p className = "Label">{props.label} </p>
            <button 
                className = "Less" 
                onClick = {props.remove}
                disabled = {props.disabled} >
                Less
            </button>
            <button 
                className = "More" 
                onClick = {props.added}>
                More
            </button>
        </div>
    )
}

export default Buildcontrol;