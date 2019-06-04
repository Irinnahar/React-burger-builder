import React from 'react';
import BurgerIngrediant from './Burgeringrediant/Burgeringrediant';
import './Burger.css';

const Burger = (props) => {
    let burgerIngrediant = Object.keys(props.ingrediant)
        .map((ingrediant) => {
            return [...Array(props.ingrediant[ingrediant])].map(
                (_, index) => {
                    return <BurgerIngrediant type={ingrediant} key={ingrediant + index} />
                }
            )
        })
        .reduce((prev, current) => {
            return prev.concat(current)
        }, [])

        if(burgerIngrediant.length == 0 ){
            burgerIngrediant = <h3>Please start adding ingredient</h3>
        }
    return (
        <div className="Burger">
            <BurgerIngrediant type="bread-top"></BurgerIngrediant>
            {burgerIngrediant}
            <BurgerIngrediant type="bread-bottom"></BurgerIngrediant>
        </div>
    )
}

export default Burger;