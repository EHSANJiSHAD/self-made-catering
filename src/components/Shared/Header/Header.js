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
            <Navbar collapseOnSelect expand="lg"  variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to='/' className='bg-secondary border-color-light border border-5  fw-bold p-2 rounded-pill me-5 shadow-lg'>SELF MADE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"className='nav-bar nav-bar-bg rounded-pill ' >
                        <Link to='/'>HOME</Link>
                        <Link to='/order'>ORDER</Link>
                        <Link to='/blogs'>BLOGS</Link>
                        <Link to='/about'>ABOUT</Link>
                        <Link to='/login'>LOGIN</Link>
                        {/* <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>



    );
};

export default Header;