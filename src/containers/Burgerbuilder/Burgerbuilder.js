import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class Burgerbuilder  extends Component {
    render(){
        return (
            <Auxiliary>
                <div>
                    <Burger />
                    <p>Burger Control</p>
                </div>
            </Auxiliary>
        )
    }
}

export default Burgerbuilder;