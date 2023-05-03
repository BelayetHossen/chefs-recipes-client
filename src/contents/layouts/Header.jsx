import React, { useContext } from 'react';
import { Image, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import LazyLoad from 'react-lazy-load';

const Header = () => {
    const { auth, user, logOut } = useContext(AuthContext);
    const location = useLocation();
    const pathName = location.pathname;
    // setActive(pathName);
    // let id = chefId[2];
    // const activate = (isActive, path, activeStyle, nonActiveStyle) => {
    //     if (isActive) {
    //         setActive(path)
    //         return activeStyle
    //     }
    //     return nonActiveStyle
    // }

    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <header className="top-navbar container d-flex justify-content-between align-items-center">

                <Navbar expand="md">
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Brand>
                        <Link className="navbar-brand" to="/">
                            Restaurant
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='float-end'>
                        <Nav className="me-auto">
                            <Link to='/' className={`nav-item nav-link ${pathName == '/' ? 'active' : ''}`}>Home</Link>
                            <Link to='/hkfjgigr' className={`nav-item nav-link ${pathName == '/hkfjgigr' ? 'active' : ''}`}>Not found page</Link>
                            <Link to='/blog' className={`nav-item nav-link ${pathName == '/blog' ? 'active' : ''}`}>Blog</Link>


                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="right-icon">

                    {

                        user ? <span className="d-flex align-items-center">
                            <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-disabled">{auth.currentUser?.displayName}</Tooltip>}>
                                <span className="d-inline-block">
                                    <Image className='bs-tooltip-left' onMouseEnter={() => setShow(!show)}
                                        x-placement="left"
                                        roundedCircle width='40px'
                                        src={auth?.currentUser?.photoURL}
                                    />
                                </span>
                            </OverlayTrigger>



                            <Link onClick={handleLogout} className='nav-item nav-link btn btn-primary px-3 py-1 text-white ms-2'>Logout</Link>
                        </span>
                            :
                            <Link to='/login' className='nav-item nav-link btn btn-primary px-3 py-1 text-white ms-2'>Login</Link>
                    }


                </div>
            </header >


        </div >
    );
};

export default Header;