import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols';

const INGREDIENT_PRICES = {
    salad : 20,
    bacon : 60,
    meat :  50,
    cheese : 10
}
class Burgerbuilder extends Component {
    state = {
        ingredients:
        {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 4

    }
    addIngredientHandler = (type) => {
        const prevCount = this.state.ingredients[type];
        const updatedCount = prevCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount;

        const prevPrice = this.state.totalPrice;
        console.log(INGREDIENT_PRICES[type])
        console.log(prevPrice)
        const newPrice = prevPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients : updatedIngredient,
            totalPrice: newPrice
        })
    }
    removeIngredientHandler = (type) => {
        const prevCount = this.state.ingredients[type];
        if(prevCount > 0) {
            const updatedCount = prevCount - 1;
            const updatedIngredient = {
                ...this.state.ingredients
            }
            updatedIngredient[type] = updatedCount;
            const prevPrice = this.state.totalPrice;
            const newPrice = prevPrice - INGREDIENT_PRICES[type];
    
            this.setState({
                ingredients : updatedIngredient,
                totalPrice : newPrice
            })
        }
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Auxiliary>
                <div>
                    <h3>Total price : {this.state.totalPrice} </h3>
                    <Burger ingrediant={this.state.ingredients} />
                    <Buildcontrols 
                    addingreient = {this.addIngredientHandler}
                    removeIngredient = {this.removeIngredientHandler}
                    disabled = {disabledInfo} ></Buildcontrols>
                </div>
            </Auxiliary>
        )
    }
}

export default Burgerbuilder;