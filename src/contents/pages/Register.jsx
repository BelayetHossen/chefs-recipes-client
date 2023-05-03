import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { userNamePhoto, createUser } = useContext(AuthContext);
    const submitRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, photo);
        createUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                update(registeredUser, name, photo);
                form.reset();
                // navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })

    }

    const update = (registeredUser, name, photo) => {
        userNamePhoto(registeredUser, name, photo)
            .then(() => {
                alert('updated');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 m-auto card p-3 my-4 shadow">
                    <h4 className='p-2 text-center'>Registration form</h4>
                    <Form onSubmit={submitRegister}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="photo">
                            <Form.Label>Photo</Form.Label>
                            <Form.Control name='photo' type="text" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                        <p>Already registered? <Link to="/login">Login</Link></p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;