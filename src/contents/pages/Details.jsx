import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Details = () => {
    const chefs = useLoaderData();
    const chefId = window.location.pathname.split('/');
    let id = chefId[2];

    let filter = chefs.filter(item => item.id == id);
    let chef = filter[0];


    return (
        <div className='container my-3'>
            <div className="row w-75 m-auto">
                <h4 className='text-center py-2 mb-3'>Single chef details</h4>
                <div className="col-md-6">
                    <img width="100%" src={chef.photo} alt="" />
                </div>
                <div className="col-md-6">
                    <ul>
                        <li>Name : {chef.name}</li>
                        <li>Likes people : {chef.likes}</li>
                        <li>Number of recipes : {chef.item_number}</li>
                        <li>Exparience : {chef.experience}</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Details;