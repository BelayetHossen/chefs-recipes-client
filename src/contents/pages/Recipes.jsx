import React from 'react';
import LazyLoad from 'react-lazy-load';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {
    const chefs = useLoaderData();
    const chefId = window.location.pathname.split('/');
    let id = chefId[3];

    let filter = chefs.filter(item => item.id == id);
    let chef = filter[0];
    let recipes = chef.items;

    return (
        <div className='container my-3'>

            <h4 className='text-center py-2 mb-3'>Recipes details</h4>
            {
                recipes.map(recipe =>
                    <div key={recipe.name} className="card my-5 p-4 shadow">
                        <div className="row ">
                            <div className="col-md-6">
                                <LazyLoad threshold={0.95} onContentVisible={() => { console.log('loaded!') }}>
                                    <img className='mt-2' src={recipe.photo} alt="" width="100%" />
                                </LazyLoad>

                            </div>
                            <div className="col-md-6">
                                <h4>Recipes name: {recipe.name}</h4>
                                <h5>Ingredients:</h5>
                                {
                                    recipe.ingredients.map(item => <li key={item}>{item}</li>)
                                }

                            </div>
                            <div className="col">
                                <h5>Instructions:</h5>
                                {
                                    recipe.instructions.map(item => <li>{item}</li>)
                                }
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Recipes;