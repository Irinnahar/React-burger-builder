import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols';
import Modal from '../../components/UI/Modal/Modal';
import Ordersummary from '../../components/Burger/Order-summary/Ordersummary';

const INGREDIENT_PRICES = {
    salad : .06,
    bacon : 1.05,
    meat :  2.00,
    cheese : .07
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
        totalPrice : 4,
        purchaseable : false,
        showModal : false,
    } 
    updatePurchaseStatus = (ingredient) => {
        const sum = Object.keys(ingredient).map(inkey => {
            return ingredient[inkey];
        })
        .reduce((sum, elm) => {
            return sum + elm;
        },0)

        if(sum > 0){
            this.setState({
                purchaseable:  true
            })
        }else {
            this.setState({               
                purchaseable: false})
        }
    }
    addIngredientHandler = (type) => {
        const prevCount = this.state.ingredients[type];
        const updatedCount = prevCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount;

        const prevPrice = this.state.totalPrice;
        const newPrice = prevPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients : updatedIngredient,
            totalPrice: newPrice
        })
        this.updatePurchaseStatus(updatedIngredient)
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
            this.updatePurchaseStatus(updatedIngredient)
        }
    }
    showModal = () => {
        this.setState({
            showModal: true
        })
    }
    clickBackdropHandler = () => {
        this.setState({
            showModal: false
        })
    }
    purchaseHandler =() => {
        alert('puchase')
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
                    <Modal show= {this.state.showModal} modalClosed = {this.clickBackdropHandler}>
                        <Ordersummary 
                            ingredient={this.state.ingredients} 
                            modalClosed = {this.clickBackdropHandler}
                            purchasing = {this.purchaseHandler}
                            price = {this.state.totalPrice}/>
                    </Modal>                   
                    <Burger ingrediant={this.state.ingredients} />
                    <Buildcontrols 
                    addingreient = {this.addIngredientHandler}
                    removeIngredient = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                    disableOrder = {!this.state.purchaseable}
                    showModal = {this.showModal} ></Buildcontrols>
                </div>
            </Auxiliary>
        )
    }
}

export default Burgerbuilder;