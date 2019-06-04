import React from 'react';
import Logo from '../../Logo/Logo';
import NaviationItems from '../Navigationitems/Navigationitems';
import './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const Sidedrawer = (props) => {
    let openClass;
        if (props.shownav){
            openClass = "Sidedrawer open"
        } else {
            openClass = "Sidedrawer closed"
        }
    
    return (
        <Auxiliary>
        <Backdrop  show= {props.shownav} clicked = {props.clickSidedrawer}/>
        <div className={openClass}>           
            <div className="logoSidebar">
                <Logo />
            </div>
            <nav>
                <NaviationItems />
            </nav>
        </div>
        </Auxiliary>
    )
}

export default Sidedrawer;