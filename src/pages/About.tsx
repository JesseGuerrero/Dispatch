import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title>About Our Dashboard</Card.Title>
                            <Card.Text>
                                Welcome to our dashboard app! This application provides users with insights and analytics...
                            </Card.Text>
                            <Card.Text>
                                <strong>Features:</strong>
                                <ul>
                                    <li>Real-time data analytics</li>
                                    <li>User-friendly interface</li>
                                    <li>Customizable reports</li>

                                </ul>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;