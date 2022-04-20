import React from 'react';
import personalImage from '../../images/personal/personal1.png'
const About = () => {
    return (
        <div className='text-secondary nav-bar-bg mt-5'>
            <h2>NAME: MD. AHASANUZZAMAN</h2>
            <img className='rounded-circle shadow-lg nav-bar-bg' style={{width:'100px',height:'100px',backgroundColor:'transparent'}} src={personalImage} alt="" />
            <p className='mt-5'>
            My mission is to become a full stack developer. For 2022, it would be to get myself into SCIC to prepare myself for a better job opportunity in a reputed IT company.In case of managing time for the course, sometimes I don't have enough time to talk to my dear ones.I'm trying my heart and soul to reach my goal.May Allah gives me strength.
            </p>

        </div>
    );
};

export default About;