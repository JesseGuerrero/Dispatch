import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Broadcast.css'; // Make sure to create this CSS file

function Settings() {
    const handleSubmit = () => {

    };
    return (
        <Container className="broadcast-container">
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit} className="broadcast-form">
                        <h2>Setup User Email</h2>
                        <Row>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Email Nickname</Form.Label>
                                    <Form.Control type="text" name="nickname" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="email" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Host SMTP</Form.Label>
                                    <Form.Control type="text" name="SMTP" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>SMTP Port</Form.Label>
                                    <Form.Control type="text" name="SMTP Port" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Protocol</Form.Label>
                                    <Form.Control type="text" name="Protocol" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Check type="checkbox" label="SMTP Auth" />
                                    <Form.Check type="checkbox" label="TLS Enable" />
                                    <Form.Check type="checkbox" label="SSL Enable" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Settings;
