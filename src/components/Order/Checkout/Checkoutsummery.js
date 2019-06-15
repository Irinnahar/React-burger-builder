import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './Checkoutsummery.css';

const Checkoutsummery = (props) => {
    return (
        <div className="Checkoutsummery">
            <h1>We hope it taste well</h1>
            <Burger ingrediant = {props.ingredients} />
            <Button btnType="Danger" btnaction = {props.backtoPrev}>Cancel</Button>
            <Button btnType="Success" btnaction = {props.moveForward}>Continue</Button>
        </div>
    )
}

export default Checkoutsummery;