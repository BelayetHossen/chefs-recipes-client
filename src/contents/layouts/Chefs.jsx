import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark } from "@react-icons/all-files/fa/FaBookmark";
import { ToastContainer, toast } from 'react-toastify';
import LazyLoad from 'react-lazy-load';


const Chefs = () => {

    const [chefs, setChefs] = useState([]);

    const handleClick = event => {
        event.target.setAttribute('disabled', 'true');
        toast.success("Added to bookmark successfully!")
    };


    useEffect(() => {
        async function fetchData() {

            const response = await fetch('https://assignment-10-server-belayethossen.vercel.app/chefs');
            const json = await response.json();
            setChefs(json);
        }

        fetchData();
    }, []);


    return (
        <div className='container my-5'>
            <div className="row">
                <ToastContainer />
                <h4 className='text-center py-3'>OUR ALL CHEFS</h4>
                {
                    chefs.map(chef =>
                        <div key={chef.id} className="col-md-3 mb-4">
                            <Card>
                                <LazyLoad threshold={0.95} onContentVisible={() => { console.log('loaded!') }}>
                                    <Card.Img variant="top" src={chef.photo} />
                                </LazyLoad>
                                <Card.Body>
                                    <Card.Title>{chef.name}</Card.Title>
                                </Card.Body>
                                <Card.Footer className='d-flex justify-content-between align-items-center'>


                                    <button className='btn btn-sm' onClick={handleClick}>Add
                                        <FaBookmark className='text-warning' />
                                    </button>


                                    <Link to={`/chef/${chef.id}`} className='btn btn-info btn-sm'>See details</Link>
                                </Card.Footer>
                            </Card>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Chefs;