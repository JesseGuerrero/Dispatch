import {Button, Col, Container, Form, Row} from "react-bootstrap";
import React from "react";

function AddTag() {
    const handleSubmit = () => {

    };
    return (
        <Container className="broadcast-container">
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit} className="broadcast-form">
                        <h2>Add Tag</h2>
                        <Form.Group>
                            <Form.Label>Tag</Form.Label>
                            <Form.Control type="text" name="tag" />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddTag;