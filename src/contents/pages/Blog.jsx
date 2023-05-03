import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container my-5'>
            <h3 className='py-3 text-center'>Some FAQ by JH M</h3>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. differences between uncontrolled and controlled components</Accordion.Header>
                    <Accordion.Body>
                        In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. How to validate React props using PropTypes</Accordion.Header>
                    <Accordion.Body>
                        Props and PropTypes are important mechanisms for passing read-only attributes between React components.

                        We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. difference between nodejs and express js.</Accordion.Header>
                    <Accordion.Body>
                        Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. What is a custom hook, and why will you create a custom hook?</Accordion.Header>
                    <Accordion.Body>
                        Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;