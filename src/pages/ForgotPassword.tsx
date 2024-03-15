import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Nav } from 'react-bootstrap';
import './ForgotPassword.css';
import {requestAPI} from "../Utils";
import {useNavigate} from "react-router-dom"; // Make sure to create this CSS file

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>('');
    const [responseText, setResponseText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setResponseText("Sending temporary email...")
        event.preventDefault();
        const response = await requestAPI('/forgot-password', 'POST', {
            email: email,
        })
        if(response && response.ok)
            navigate('/change-password')
        else
            setResponseText("Email error")
    };

    return (
        <Container className="forgot-password-container">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center">Forgot Your Password</h2>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <p>{responseText}</p>
                        <Button variant="primary" type="submit" className="w-100">
                            Send Email
                        </Button>
                        <Nav className="justify-content-center mt-3">
                            <Nav.Item>
                                <Nav.Link href="/signup">Sign Up</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/change-password">Change password</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPassword;
