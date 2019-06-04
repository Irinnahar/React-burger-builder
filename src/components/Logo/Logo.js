import React from 'react';

import LogoImg from '../../assests/images/burger-logo.png'
import './Logo.css';

const Logo = (props) => {
    return (
        <div className="Logo">
            <img  src={LogoImg} />
        </div>
    )
}

export default Logo;