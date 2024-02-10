import React, { useState } from 'react';
import { Container, Form, Button, Row, Col} from 'react-bootstrap';
import './SignUp.css';
import { requestAPI, verifyStrongPassword } from "../Utils";
const SignUp = () => {
    const [responseText, setResponseText] = useState("");
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        if(form.password.value === form.confirmPassword.value)
            if(verifyStrongPassword(form.password.value)) {
                const response = await requestAPI('/createNewsletter', 'POST', {
                    title: form.newsletterTitle.value,
                    ownerName: form.ownerName.value,
                    email: form.email.value,
                    password: form.password.value,
                });
                if(!response)
                    setResponseText("Signup failed!"); // Set error message
                else if (response.ok)
                    setResponseText("Signup success! Verification email sent, you have 2 hours to verify..."); // Set success message
                else if(response.status == 400)
                    setResponseText("Email already exists!"); // Set error message
                else
                    setResponseText("Signup failed!")
            }
            else
                setResponseText("Set a password with 1 letter, 1 capital letter, 1 number & 5 characters...");
        else
            setResponseText("Passwords do not match!");
    };
    return (
        <Container className="signup-container">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter newsletter title" name="newsletterTitle"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your first name" name="ownerName"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword"/>
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
