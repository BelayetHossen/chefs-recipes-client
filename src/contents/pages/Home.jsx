
import React from 'react';
import Slider from '../layouts/Slider';
import Chefs from '../layouts/Chefs';
import Gallery from '../layouts/Gallery';
import ContactUs from '../layouts/ContactUs';

const Home = () => {

    return (
        <div>

            <Slider />
            <Chefs />
            <Gallery />
            <ContactUs />

        </div >
    );
};

export default Home;