import React, { Component } from 'react';
import AUX from '../../../hoc/Auxiliary/Auxiliary';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    render() {     
        return (
            <AUX>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className="Modal"
                    style={
                        {
                            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: this.props.show ? '1' : '0'
                        }
                    }>
                    {this.props.children}
                </div>

            </AUX>
        )
    }
}

export default Modal;