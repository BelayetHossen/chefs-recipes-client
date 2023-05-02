import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className="top-navbar container d-flex justify-content-between align-items-center">

                <Navbar expand="md">
                    <Navbar.Brand href="#home">
                        <Link className="navbar-brand" to="/">
                            <img src="../../../public/assets/images/logo.png" alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='float-end'>
                        <Nav className="me-auto">
                            <Link to='/' className='nav-item nav-link'>Home</Link>
                            <Link to='/about' className='nav-item nav-link'>About</Link>
                            <Link to='/blog' className='nav-item nav-link'>Blog</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="right-icon">
                    <Link to='/login' className='nav-item nav-link btn btn-primary px-3 py-1 text-white'>Login</Link>
                </div>
            </header>


        </div>
    );
};

export default Header;