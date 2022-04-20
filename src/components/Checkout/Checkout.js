import './Checkout.css'

import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {checkoutId} = useParams();
    return (
        <div>
            <h2 style={{color:'gray'}}>CHECKOUT THIS SERVICE OF : {checkoutId}</h2>
        </div>
    );
};

export default Checkout;