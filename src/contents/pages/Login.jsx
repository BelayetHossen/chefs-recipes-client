import React, { useContext, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

const Login = () => {
    const [show, setShow] = useState(true);
    const { loginEmailPassword, user, loginGoogle, loginGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const loginEmailPass = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginEmailPassword(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const LoginGoogleHandler = () => {
        loginGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const LoginGihubHandler = () => {
        loginGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='container'>


            <div className="row">
                <div className="col-md-6 m-auto card p-3 my-4 shadow">
                    {
                        location.state && <Alert variant="danger" dismissible>
                            <Alert.Heading>You have to login must!</Alert.Heading>
                        </Alert>

                    }

                    <h4 className='p-2 text-center'>Login form</h4>
                    <Form onSubmit={loginEmailPass}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign In
                        </Button>
                        <p>New to our restaurant? <Link to="/register">Register</Link></p>
                    </Form>
                    <div className="d-flex justify-content-around">
                        <Button variant="danger" onClick={LoginGoogleHandler}>
                            <FaGoogle /> Login with google
                        </Button>
                        <Button variant="dark" onClick={LoginGihubHandler}>
                            <FaGithub /> Login with github
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;