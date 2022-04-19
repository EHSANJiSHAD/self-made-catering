import React from 'react';
import notFound from '../../../images/404/notFound.jpg'
const NotFound = () => {
    return (
        <div>
            <h2 style={{color:'gray'}}>404 NOT FOUND!</h2>
            <img style={{height:'700px',width:'100%',borderRadius:"30px"}} src={notFound} alt="" />
        </div>
    );
};

export default NotFound;