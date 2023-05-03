import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


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
                    <img loading="lazy" width="100%" src={chef.photo} alt="" />
                </div>
                <div className="col-md-6">
                    <ul>
                        <li>Name : {chef.name}</li>
                        <li>Likes people : {chef.likes}</li>
                        <li>Number of recipes : {chef.item_number}</li>
                        <li>Exparience : {chef.experience}</li>
                    </ul>

                    <Link to={`/chef/recipes/${chef.id}`} className='btn btn-primary'>View recipes</Link>

                </div>
            </div>
        </div>
    );
};

export default Details;