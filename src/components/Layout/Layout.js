import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import './Layout.css';
import Toolbar from '../Navigations/Toolbar/Toolbar';
import Sidedrawer from '../Navigations/Sidedrawer/Sidedrawer';

class Layout extends Component {
    state = {
        closeSidenav: false
    }
    SidedrawerHandler = () => {
        this.setState({
            closeSidenav : false
        })
    }
    ClickMenuHandler = () => {
        this.setState({
            closeSidenav : true
        })
    }
    render(){
        return (
            <Auxiliary>
                <Toolbar clickMenu = {this.ClickMenuHandler}/>
                <Sidedrawer shownav = {this.state.closeSidenav} clickSidedrawer ={this.SidedrawerHandler}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
   
}

export default Layout;