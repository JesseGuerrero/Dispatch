import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import './Broadcast.css'; // Your custom styles

function ScheduleEmail() {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());

    // Annotate the event parameter type
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent form submission
    };

    // Adjust the onChange handler to handle potential null values
    const handleStartDateChange = (date: Date | null) => {
        if (date) setStartDate(date);
    };

    const handleEndDateChange = (date: Date | null) => {
        if (date) setEndDate(date);
    };

    return (
        <Container className="broadcast-container">
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit} className="broadcast-form">
                        <h2>By Tag</h2>
                        <Form.Group>
                            <Form.Label>Tag</Form.Label>
                            <Form.Control type="text" name="tag" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Template</Form.Label>
                            <Form.Control type="text" name="Email Template" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Schedule Date</Form.Label>
                            <br />
                            <DatePicker
                                selected={startDate}
                                onChange={handleStartDateChange}
                                className="form-control dark-datepicker"
                                calendarClassName="dark-calendar"
                            />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <Form onSubmit={handleSubmit} className="broadcast-form">
                        <h2>By Email</h2>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Template</Form.Label>
                            <Form.Control type="text" name="Email Template" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Schedule Date</Form.Label>
                            <br />
                            <DatePicker selected={endDate} onChange={handleEndDateChange} className="form-control" />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ScheduleEmail;
