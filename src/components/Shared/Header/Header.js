import './Header.css'
import {signOut} from 'firebase/auth' 
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () =>{
        signOut(auth);
    }
    return (

        <div className='nav'>

            {/* <nav className='nav-bar'>
                <Link to='/'>HOME</Link>
                <Link to='/order'>ORDER</Link>
                <Link to='/blogs'>BLOGS</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/login'>LOGIN</Link>
            </nav> */}
            <Navbar collapseOnSelect expand="lg"  variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to='/' className=' border-color-light border border-5  fw-bold p-2 rounded-pill me-5 align-center text-secondary shadow-lg text'>SELF  MADE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"className='nav-bar nav-bar-bg rounded-pill ' >
                        <Link to='/home'>HOME</Link>
                        <Link to='/checkout'>CHECKOUT</Link>
                        <Link to='/blogs'>BLOGS</Link>
                        <Link to='/about'>ABOUT</Link>
                        {
                            user 
                            ?
                            <button className='logout-btn' onClick={handleLogOut}>LOG OUT</button>
                            :
                            <Link to='/login'>LOGIN</Link>}
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>



    );
};

export default Header;