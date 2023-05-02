import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { FaBookmark } from "@react-icons/all-files/fa/FaBookmark";
import { RotatingLines } from 'react-loader-spinner';

const Chefs = () => {
    const { setLoading, loading } = useContext(AuthContext);
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const response = await fetch('http://localhost:5000/chefs');
            const json = await response.json();
            setChefs(json);
        }

        fetchData();
    }, []);




    return (
        <div className='container my-5'>
            <div className="row">
                {
                    chefs.map(chef =>
                        <div key={chef.id} className="col-md-3 mb-4">
                            <Card>
                                <Card.Img variant="top" src={chef.photo} />
                                <Card.Body>
                                    <Card.Title>{chef.name}</Card.Title>
                                </Card.Body>
                                <Card.Footer className='d-flex justify-content-between align-items-center'>
                                    <FaBookmark className='text-warning' />

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