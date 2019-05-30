import React from 'react';
import BurgerIngrediant from './Burgeringrediant/Burgeringrediant';
import './Burger.css';

const Burger = (props) => {
    return (
        <div className= "Burger">
            <BurgerIngrediant type = "bread-top"></BurgerIngrediant>
            <BurgerIngrediant type = "salad"></BurgerIngrediant>
            <BurgerIngrediant type = "cheese"></BurgerIngrediant>
            <BurgerIngrediant type = "meat"></BurgerIngrediant>
            <BurgerIngrediant type = "bread-bottom"></BurgerIngrediant>
        </div>
    )
}

export default Burger;