import React, { useContext, useState } from 'react';
import { Image, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);

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

                    {
                        user ? <span className="d-flex align-items-center">
                            <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
                                <span className="d-inline-block">
                                    <Image className='bs-tooltip-left' onMouseEnter={() => setShow(!show)}
                                        x-placement="left"
                                        roundedCircle width='40px'
                                        src="../../../public/assets/images/avt-img.jpg"
                                    />
                                </span>
                            </OverlayTrigger>



                            <Link to='/login' className='nav-item nav-link btn btn-primary px-3 py-1 text-white ms-2'>Logout</Link>
                        </span>
                            :
                            <Link to='/login' className='nav-item nav-link btn btn-primary px-3 py-1 text-white ms-2'>Login</Link>
                    }


                </div>
            </header>


        </div>
    );
};

export default Header;