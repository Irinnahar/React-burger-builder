import React from 'react';
import AUX from '../../../hoc/Auxiliary';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    return(
        <AUX>
            <Backdrop show = {props.show} clicked = {props.modalClosed} />
            <div className="Modal" 
                style = {
                    {
                        transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity : props.show ? '1' : '0'
                    }
                }>
                {props.children}
            </div>
 
        </AUX>
    )
}

export default Modal;