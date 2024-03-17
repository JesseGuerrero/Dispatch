import { useRef, useState } from 'react';
import EmailEditor from 'react-email-editor';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { requestAPI } from "../Utils.ts";

const CreateEmail = () => {
    const emailEditorRef = useRef<any>(null);
    const [responseText, setResponseText] = useState("");
    const [templateName, setTemplateName] = useState("");
    const [subject, setSubject] = useState("");

    const exportHtml = async () => {
        emailEditorRef.current.editor.exportHtml(async (data: { design: object, html: string }) => {
            const { design, html } = data
            console.log(design);
            const response = await requestAPI('/template', 'POST', {
                name: templateName,
                subject: subject,
                html: html,
                design: design
            });
            if (response && response.ok) {
                setResponseText("Template added!")
            } else {
                setResponseText("Improper data")
            }
        });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <EmailEditor ref={emailEditorRef} />
                </Col>
            </Row>
            <Row>

                <Col md={6}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="templateName">Template Name:</Form.Label>
                            <Form.Control
                                type="text"
                                id="templateName"
                                value={templateName}
                                onChange={(e) => setTemplateName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="subject">Subject:</Form.Label>
                            <Form.Control
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </Form.Group>
                        <Button onClick={exportHtml}>Save Template</Button>
                    </Form>
                    <p>{responseText}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default CreateEmail;
