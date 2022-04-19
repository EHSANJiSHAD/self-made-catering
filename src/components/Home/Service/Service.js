import './Service.css'

import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, img, name, price, description } = service;
    console.log(name);
    const navigate = useNavigate();
    const handleCheckOutRout = event =>{
        navigate('/checkout');
    }
    return (
        <div className='service'>

            <div>
                <img className='service-img' src={img} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
            </div>

            <div className='tk-btn-sec'>
                <hr />
                <h5>{price} tk/person</h5>
                <button className='btn' onClick={handleCheckOutRout}>
                    CHECKOUT
                </button>
            </div>




        </div>
    );
};

export default Service;