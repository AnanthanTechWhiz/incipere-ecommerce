import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home: React.FC = () => {
    return (
        <Container>
            <h1>Welcome to Our E-Commerce Site</h1>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="path/to/image1.jpg" />
                        <Card.Body>
                            <Card.Title>Product 1</Card.Title>
                            <Card.Text>
                                Description of Product 1.
                            </Card.Text>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="path/to/image2.jpg" />
                        <Card.Body>
                            <Card.Title>Product 2</Card.Title>
                            <Card.Text>
                                Description of Product 2.
                            </Card.Text>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="path/to/image3.jpg" />
                        <Card.Body>
                            <Card.Title>Product 3</Card.Title>
                            <Card.Text>
                                Description of Product 3.
                            </Card.Text>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;