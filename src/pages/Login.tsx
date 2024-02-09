import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Nav } from 'react-bootstrap';
import './Login.css'; // Make sure to create this CSS file

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission here

        // Navigate to /dashboard
        navigate('/dashboard');
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

                        <Button variant="primary" type="submit" className="w-100">
                            Login
                        </Button>

                        <Nav className="justify-content-center mt-3">
                            <Nav.Item>
                                <Nav.Link href="/signup">Sign Up</Nav.Link>
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
