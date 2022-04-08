import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/products' className='nav-link'>Products</Link>
                        <Link to='/orders' className='nav-link'>Orders</Link>
                        <Link to='/reviews' className='nav-link'>Reviews</Link>
                        <Link to='/login' className='nav-link'>Login</Link>
                        <Link to='/register' className='nav-link'>Register</Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;