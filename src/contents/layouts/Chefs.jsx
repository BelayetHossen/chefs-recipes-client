import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark } from "@react-icons/all-files/fa/FaBookmark";
import { ToastContainer, toast } from 'react-toastify';


const Chefs = () => {

    const [chefs, setChefs] = useState([]);

    const handleClick = event => {
        event.target.setAttribute('disabled', 'true');
        toast.success("Added to bookmark successfully!")
    };


    useEffect(() => {
        async function fetchData() {

            const response = await fetch('http://localhost:5000/chefs');
            const json = await response.json();
            setChefs(json);
        }

        fetchData();
    }, []);


    // add() {
    //     this.props.onButtonClick(this.input.value);
    //     this.input.value = '';
    // }

    return (
        <div className='container my-5'>
            <div className="row">
                <ToastContainer />
                {
                    chefs.map(chef =>
                        <div key={chef.id} className="col-md-3 mb-4">
                            <Card>
                                <Card.Img variant="top" src={chef.photo} loading="lazy" />
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