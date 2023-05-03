import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';



// const from = '/';


const Register = () => {
    const { userNamePhoto, createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const submitRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;



        function checkPassword(str) {
            const passValRegEx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            return passValRegEx.test(str);
        }
        if (!checkPassword(password)) {
            toast.error("Password must be 8 caracters and numeric and special carecters mix")
        }


        if (name == '') {
            toast.error("The name field is requrired!")
        }
        if (email == '') {
            toast.error("The email field is requrired!")
        }
        if (password == '') {
            toast.error("The password field is requrired!")
        }
        if (photo == '') {
            toast.error("The photo field is requrired!")
        }

        if (name != '' && email != '' && password != '' && photo != '' && checkPassword) {
            createUser(email, password)
                .then(result => {
                    const registeredUser = result.user;
                    update(registeredUser, name, photo);
                    form.reset();
                    setTimeout(function () {
                        navigate('/', { replace: true })
                    }, 3000);

                })
                .catch(error => {
                    console.log(error);
                })
        }


    }

    const update = (registeredUser, name, photo) => {
        userNamePhoto(registeredUser, name, photo)
            .then(() => {
                toast.success("User registered successfully! Redirecting.....")

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 m-auto card p-3 my-4 shadow">
                    <ToastContainer />

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