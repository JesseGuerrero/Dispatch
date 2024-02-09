import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={6} className="text-center">
                    <h1>Welcome to the Dashboard App</h1>
                    <p className="lead">Your one-stop solution for managing data effectively.</p>
                    <Button variant="primary" size="lg">Get Started</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;