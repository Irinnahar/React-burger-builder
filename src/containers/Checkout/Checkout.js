import React, {Component} from 'react';
import Checkoutsummery from '../../components/Order/Checkout/Checkoutsummery';

class Checkout extends Component{
    state = {
        ingredients : {
            salad : 1,
            meat : 1,
            bacon : 1,
            cheese : 1
        }
    }
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        let ingredients = {};
        for(let i of query.entries()){
            ingredients[i[0]] = +i[1]
        }
        this.setState({
            ingredients : ingredients
        })
    }
    backtoPrevHandler = () => {
        this.props.history.goBack()
    }
    moveForwardHandler = () => {
        this.props.history.replace('/checkout/contact-info')
    }
    render(){
        return( 
            <div>
                <Checkoutsummery 
                    ingredients = {this.state.ingredients}
                    backtoPrev = {this.backtoPrevHandler}
                    moveForward = {this.moveForwardHandler}/>
            </div>
        )
    }
}

export default Checkout;