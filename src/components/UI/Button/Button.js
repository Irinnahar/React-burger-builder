import React from 'react';
import './Button.css';

const Button = (props) => {
    return(
        <div className="Button" onClick ={props.btnaction}>
            <span className={props.btnType}>
            {props.children}
            </span>
        </div>
    )
}

export default Button;