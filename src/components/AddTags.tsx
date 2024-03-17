import {Button, Col, Container, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import {requestAPI} from "../Utils.ts";

function AddTag() {
    const [responseText, setResponseText] = useState("");
    const [tag, setTag] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await requestAPI('/tag', 'POST', {
            name: tag,
            description: description
        });
        if(response && response.ok)
            setResponseText("Tag added!")
        else
            setResponseText("Improper data")
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const input = e.target.value;
        if (input.length <= 280) {
            setDescription(input);
            setResponseText(String(280-input.length) + " characters left...")
        } else
            setResponseText("280 character limit reached....")
    };

    return (
        <Container className="broadcast-container">
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit} className="broadcast-form">
                        <h2>Add Tag</h2>
                        <Form.Group>
                            <Form.Label>Tag</Form.Label>
                            <Form.Control type="text" name="tag" value={tag} onChange={(e) => setTag(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" value={description} onChange={handleDescriptionChange}/>
                        </Form.Group>
                        <p>{responseText}</p>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddTag;
