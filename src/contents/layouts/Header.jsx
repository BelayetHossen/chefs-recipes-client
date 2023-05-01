import React, { useState } from 'react';
import { Button, Modal, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <header className="top-navbar container d-flex justify-content-between align-items-center">

                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                        <a className="navbar-brand" href="index.html">
                            <img src="../../../public/assets/images/logo.png" alt="" />
                        </a>
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
                    <Button variant="primary" onClick={handleShow}>
                        Login
                    </Button>
                </div>
            </header>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Header;