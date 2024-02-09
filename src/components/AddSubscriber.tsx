import {Button, Col, Container, Form, Row} from "react-bootstrap";
import React from "react";

function AddSubscriber() {
    const handleSubmit = () => {

    };
    return (
        <Container className="broadcast-container">
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit} className="broadcast-form">
                        <h2>Add Subscriber</h2>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstName" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="Email" />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddSubscriber;