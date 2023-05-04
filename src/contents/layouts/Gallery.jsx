import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const Gallery = () => {
    return (
        <div>
            <Container className='mb-4'>
                <h4 className='text-center py-3'>Our kitchen gallery (extra 1)</h4>
                <Row xs={1} md={3} lg={3} className="g-4">
                    <Col>
                        <Card>
                            <LazyLoad>
                                <Card.Img variant="top" src="https://www.mydomaine.com/thmb/6v5I5TLRPCYwBWcm5djiaofPDXE=/2200x0/filters:no_upscale():strip_icc()/kimberly1-2c0d66934cfe43cdaa89beeb92cdc98b.jpg" />
                            </LazyLoad>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <LazyLoad>
                                <Card.Img variant="top" src="https://www.mydomaine.com/thmb/56TP3SwWDr47rY4BXJk8mdtvbgw=/1500x0/filters:no_upscale():strip_icc()/green-simple-kitchen-design-470d28a372d340268fbe0d48635c3750.jpg" />
                            </LazyLoad>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <LazyLoad>
                                <Card.Img variant="top" src="https://media.architecturaldigest.com/photos/60a6a478ced6797772f44d7a/4:3/w_1424,h_1068,c_limit/20191011-DSC_7759-Edit_HI_RES.jpeg" />
                            </LazyLoad>
                        </Card>
                    </Col>


                </Row>
            </Container>
        </div>
    );
};

export default Gallery;