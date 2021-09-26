import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

    // ==============SHOWING TOTAL CART===========

const Cart = (props) => {
    const{cart}=props;
    let total=0;
    for(const donation of cart){
        total=total+donation.annualIncome;
    }
    return (
        <div className="side-cart">
            <h3>Member Added : <FontAwesomeIcon icon={faUser} /> {cart.length}</h3>
            <h3>Total Amount: <br/> ${total}</h3>
            <h3>Participated By</h3>
            {
                cart.map(person=><h3>{person.name}</h3> )
            }
        </div>
    );
    };
export default Cart;