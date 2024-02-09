import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Broadcast.css'; // Make sure to create this CSS file

function Broadcast() {
    const handleSubmit = () => {

    };

    return (
        <Container className="broadcast-container">
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit} className="broadcast-form">
                        <h2>By Tag</h2>
                        <Form.Group>
                            <Form.Label>Tag</Form.Label>
                            <Form.Control type="text" name="tag" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Template</Form.Label>
                            <Form.Control type="text" name="Email Template" />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <Form onSubmit={handleSubmit} className="broadcast-form">
                        <h2>By Email</h2>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Template</Form.Label>
                            <Form.Control type="text" name="Email Template" />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Broadcast;
