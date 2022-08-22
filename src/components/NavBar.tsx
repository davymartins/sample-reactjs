import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
export const NavBar = () => {
    return (
        <Navbar sticky='top' expand='lg'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'/>
                <Nav>
                    <Link to='/'> Home </Link>
                    <Link to='/about'> About </Link>
                    <Link to='/contact'> Contact </Link>
                    <Link to='/portfolio'> Portfolio </Link>
                </Nav>
            </Container>
        </Navbar>
    );
};