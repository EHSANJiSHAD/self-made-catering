import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
import Service from './../Service/Service';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('/public/services.json')
        .then(res=> res.json())
        .then(data=> setServices(data));
    },[])
    return (
        <div>
            <h2 className='header-text'>MY SERVICES</h2>

            <div>
                {
                    services.map(service=> 
                    <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;