import React, { useState } from 'react';
import { Container, Form, Button, Row, Col} from 'react-bootstrap';
import './SignUp.css';
import { requestAPI } from "../Utils";
const SignUp = () => {
    const [responseText, setResponseText] = useState("");
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const response = await requestAPI('/sendVerificationEmail', 'POST', {
            ownerName: form.ownerName.value,
            email: form.email.value
        });
        setResponseText(`Verification email sent to ${form.email.value}`)
    };
    return (
        <Container className="signup-container">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your first name" name="ownerName"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email"/>
                        </Form.Group>
                        <p>{responseText}</p>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
export default SignUp;
