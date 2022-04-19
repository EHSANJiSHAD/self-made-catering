import './Footer.css'

import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <footer>
            <p><small> &copy; SELF-MADE {year}</small></p>
        </footer>
    );
};

export default Footer;