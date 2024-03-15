import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import '../Broadcast.css';
import Action from "./Action"; // Make sure to create this CSS file

function OnSubscribe() {
    const handleSubmit = () => {

    };

    return (
        <Col md={6}>
            <Form onSubmit={handleSubmit} className="broadcast-form">
                <h2 style={{ color: 'var(--color-text)' }}>On Subscribe</h2>
                <Form.Group>
                    <Form.Label style={{ color: 'var(--color-text)' }}>Send To Tag</Form.Label>
                    <Form.Control type="text" name="tag" />
                </Form.Group>
                <Action />
                <Button type="submit" style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-border)' }}>Submit</Button>
            </Form>
        </Col>
    );
}

export default OnSubscribe;