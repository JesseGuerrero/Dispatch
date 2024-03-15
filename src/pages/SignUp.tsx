import React, { useState } from 'react';
import { Container, Form, Button, Row, Col} from 'react-bootstrap';
import './SignUp.css';
import { requestAPI, verifyStrongPassword } from "../Utils";

function isAuthInvisible(form: HTMLFormElement) {
    // Check if auth code/token form group is display none
    const authCodeFormGroup = form.querySelector('#formBasicConfirmToken');
    if (authCodeFormGroup) {
        const displayStyle = window.getComputedStyle(authCodeFormGroup).display;
        return displayStyle === 'none'
    }
    return true;
}

const SignUp = () => {
    const [responseText, setResponseText] = useState("");
    const [authCodeFormVisible, setAuthCodeFormVisible] = useState(false);
    const preAuthentication = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResponseText("Loading...")
        const form = e.target as HTMLFormElement;
        if(isAuthInvisible(form)) {
            const response = await requestAPI('/create-token', 'POST', {
                firstName: form.owner.value,
                email: form.email.value
            });
            if(response && response.ok) {
                setResponseText("Verification email sent...")
                setAuthCodeFormVisible(true);
            } else {
                setResponseText("An error has occured")
            }
            return;
        }
        else if(form.token.value.length == 4 && form.password.value === form.confirmPassword.value)
            if(verifyStrongPassword(form.password.value)) {
                    const validToken = await requestAPI('/validate-token', 'POST', {
                        'email': form.email.value,
                        'token': form.token.value
                    })
                    if(validToken && validToken.status != 200) {
                        setResponseText("invalid token")
                        return;
                    }
                    const response = await requestAPI('/newsletter', 'POST', {
                        'title': form.titleVar.value,
                        'owner': form.owner.value,
                        'email': form.email.value,
                        'password': form.password.value
                    })

                    if (!response)
                        setResponseText("Signup failed!"); // Set error message
                    else if (response.ok)
                        setResponseText("Account created"); // Set success message
                    else if (response.status == 400)
                        setResponseText("Email already exists!"); // Set error message
                    else
                        setResponseText("Signup failed!")
            } else
                setResponseText("Set a password with 1 letter, 1 capital letter, 1 number & 5 characters...");
        else
            setResponseText("Passwords or token do not match!");
    };
    return (
        <Container className="signup-container">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>Sign Up</h2>
                    <Form onSubmit={preAuthentication}>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value="Newsletter Test" placeholder="Enter newsletter title" name="titleVar" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" value="Jesse" placeholder="Enter your first name" name="owner" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value="jesseguerrero1991@gmail.com" placeholder="Enter email" name="email" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value="D0lot$ofwork" placeholder="Password" name="password" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" value="D0lot$ofwork" placeholder="Confirm Password" name="confirmPassword" required/>
                        </Form.Group>
                        {authCodeFormVisible == true && (
                            <Form.Group controlId="formBasicConfirmToken">
                                <Form.Label>Auth code</Form.Label>
                                <Form.Control type="text" placeholder="Verification Code" name="token"/>
                            </Form.Group>
                        )}
                        <p>{responseText}</p>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
export default SignUp;
