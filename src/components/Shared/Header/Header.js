import './Header.css'

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (

        <div>

            {/* <nav className='nav-bar'>
                <Link to='/'>HOME</Link>
                <Link to='/order'>ORDER</Link>
                <Link to='/blogs'>BLOGS</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/login'>LOGIN</Link>
            </nav> */}
            <Navbar collapseOnSelect expand="lg" sticky='top' variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to='/' className=' border-color-light border border-5  fw-bold p-2 rounded-pill me-5 align-center text-secondary shadow-lg text'>SELF  MADE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"className='nav-bar nav-bar-bg rounded-pill ' >
                        <Link to='/home'>HOME</Link>
                        <Link to='/services'>SERVICES</Link>
                        <Link to='/blogs'>BLOGS</Link>
                        <Link to='/about'>ABOUT</Link>
                        <Link to='/login'>LOGIN</Link>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>



    );
};

export default Header;