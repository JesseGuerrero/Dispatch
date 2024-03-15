import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Nav } from 'react-bootstrap';
import './ForgotPassword.css';
import {requestAPI, verifyStrongPassword} from "../Utils";
import {useNavigate} from "react-router-dom"; // Make sure to create this CSS file

const ChangePassword = () => {
    const [responseText, setResponseText] = useState("");
    const [email, setEmail] = useState<string>('');
    const [oldPassword, setOldPassword] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!verifyStrongPassword(password)) {
            setResponseText("Set a password with 1 letter, 1 capital letter, 1 number & 5 characters...");
            return;
        }
        if(password == confirmPassword) {
            const response = await requestAPI('/change-password', 'POST', {
                email: email,
                password: oldPassword,
                newPassword: password
            });
            if(response && response.ok)
                navigate('/login')
            else
                setResponseText("Improper login")
        } else {
            setResponseText("Confirm password must match new password")
        }
    };

    return (
        <Container className="forgot-password-container">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center">Change Your Password</h2>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Label>Old/Temporary Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your old password"
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your new password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>

                        <p>{responseText}</p>
                        <Button variant="primary" type="submit" className="w-100">
                            Change Password
                        </Button>

                        <Nav className="justify-content-center mt-3">
                            <Nav.Item>
                                <Nav.Link href="/signup">Sign Up</Nav.Link>
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

export default ChangePassword;
