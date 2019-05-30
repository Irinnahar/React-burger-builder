import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import './Layout.css';

const Layout = (props) => {
    return (
        <Auxiliary>
            <div>
                Toolbar, Sidebar, Backrop
        </div>
            <main className="Content">
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default Layout;