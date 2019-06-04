import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';

const Toolbar = (props) => {
    return (
            <header className="Toolbar">
                <div onClick= {props.clickMenu} className="DrawerToggle">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="LogoTop">
                    <Logo />
                </div>
                <nav className="DesktopDesign">
                    <NavigationItems />
                </nav>
            </header>
    )
}

export default Toolbar;