import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Nav } from 'react-bootstrap';
import './Login.css';
import {requestAPI} from "../Utils"; // Make sure to create this CSS file

const Login = () => {
    const [responseText, setResponseText] = useState("");
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await requestAPI('/auth/login', 'POST', {
            email: email,
            password: password
        });
        if(response && response.ok)
            window.location.href = '/dashboard';
        else
            setResponseText("Improper login")
    };

    return (
        <Container className="login-container">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center">Login</h2>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <p>{responseText}</p>
                        <Button variant="primary" type="submit" className="w-100">
                            Login
                        </Button>

                        <Nav className="justify-content-center mt-3">
                            <Nav.Item>
                                <Nav.Link href="/signup">Sign Up</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/change-password">Change password</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/forgot-password">Forgot Your Password?</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
