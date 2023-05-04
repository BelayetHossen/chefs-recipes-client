import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div>
            <Container className='mb-4'>
                <h4 className='text-center py-3'>Contact us (extra 2)</h4>
                <div className="row">
                    <div className="col-md-8 m-auto card shadow py-3">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your massage</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button className='w-100' variant="primary" type="submit">
                                Send
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactUs;