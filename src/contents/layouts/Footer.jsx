import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left py-5 bg-secondary">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Footer Content</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li><Link className='text-white'>Link 1</Link></li>
                                <li><Link className='text-white'>Link 2</Link></li>
                                <li><Link className='text-white'>Link 3</Link></li>
                                <li><Link className='text-white'>Link 4</Link></li>
                                <li><Link className='text-white'>Link 5</Link></li>
                                <li><Link className='text-white'>Link 6</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li><Link className='text-white'>Link 1</Link></li>
                                <li><Link className='text-white'>Link 2</Link></li>
                                <li><Link className='text-white'>Link 3</Link></li>
                                <li><Link className='text-white'>Link 4</Link></li>
                                <li><Link className='text-white'>Link 5</Link></li>
                                <li><Link className='text-white'>Link 6</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center text-light py-3 bg-dark">© 2023 Copyright:
                    <Link href="https://bhtechit.com/"> Belayet Hossen Biplob</Link>
                </div>

            </footer>
        </div>
    );
};

export default Footer;