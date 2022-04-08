import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, signOutHandler } = useFirebase()
    console.log(user)
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/products' className='nav-link'>Products</Link>
                        <Link to='/orders' className='nav-link'>Orders</Link>
                        <Link to='/reviews' className='nav-link'>Reviews</Link>
                        {
                            user.uid
                                ?
                                <>
                                    <button onClick={signOutHandler} className='btn btn-outline-danger btn-sm me-3'>SignOut</button>
                                    <img className='user-img border border-primary' src={user.photoURL} alt="" />

                                </>
                                :
                                <>
                                    <Link to='/login' className='nav-link'>Login</Link>
                                    <Link to='/register' className='nav-link'>Register</Link>
                                </>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;