
import React from 'react';
import { Button, Carousel, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Home = () => {
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
                            <Nav.Link className="nav-item" href="#home">Home</Nav.Link>
                            <Nav.Link className="nav-item" href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="right-icon">
                    <Button>Login</Button>
                </div>
            </header>

            <Carousel className='slider'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../../public/assets/images/slider-01.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../../public/assets/images/slider-01.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../../public/assets/images/slider-01.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div >
    );
};

export default Home;