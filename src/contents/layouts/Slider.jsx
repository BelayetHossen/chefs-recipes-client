import React from 'react';
import { Carousel } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const Slider = () => {
    console.log();
    return (
        <div>
            <Carousel className='slider'>
                <Carousel.Item>
                    <LazyLoad>
                        <img
                            loading="lazy"
                            className="d-block w-100"
                            src="https://img.freepik.com/premium-vector/food-menu-restaurant-facebook-cover-template-banner-design_624457-2295.jpg?w=2000"
                            alt="First slide"
                        />
                    </LazyLoad>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <LazyLoad>
                        <img

                            className="d-block w-100"
                            src="https://i.pinimg.com/originals/bf/65/d5/bf65d51f34b1bf193ec947f3c0c3f3e0.jpg"
                            alt="Second slide"
                        />
                    </LazyLoad>

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <LazyLoad>
                        <img

                            className="d-block w-100"
                            src="https://img.pikbest.com/backgrounds/20190227/brown-simple-flat-food-banner-background_1867052.jpg!bwr800"
                            alt="Third slide"
                        />
                    </LazyLoad>

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;