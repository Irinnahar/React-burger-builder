import React from 'react';
import './Ordersummary.css';
import Button from '../../UI/Button/Button';

const Ordersummary = (props) => {
    const ingredients = Object.keys(props.ingredient)
        .map(ingredient => {
            return <li key = {ingredient}>
                    <span style={{textTransform: 'capitalize'}}>{ingredient}</span> 
                    : {props.ingredient[ingredient]}
            </li>
        })
    return(
        <div>
            <h3>Your order</h3>
            <p>Your delicious burger made by this ingredinants</p>
            {ingredients}
            <hr />
            <h3>Total :  {props.price.toFixed(2)}</h3>
            <p>Ready to checkout?</p>
            <Button 
                btnType = "Danger"
                btnaction= {props.modalClosed}>CANCEL</Button>
            <Button 
                btnType = "Success"
                btnaction = {props.purchasing}>CONTINUE</Button>
        </div>
    )
}

export default Ordersummary;