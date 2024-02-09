import React, {useState} from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import '../Broadcast.css';
import Action from "./Action";
import DatePicker from "react-datepicker"; // Make sure to create this CSS file
import '../Broadcast.css'; // Your custom styles

function OnDate() {
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
        <Col md={6}>
            <Form onSubmit={handleSubmit} className="broadcast-form">
                <h2 style={{ color: 'var(--color-text)' }}>On Date</h2>
                <Form.Group>
                    <Form.Label style={{ color: 'var(--color-text)' }}>Send To Tag</Form.Label>
                    <Form.Control type="text" name="tag" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <br />
                    <DatePicker
                        selected={startDate}
                        onChange={handleStartDateChange}
                        className="form-control dark-datepicker"
                        calendarClassName="dark-calendar"
                    />
                </Form.Group>
                <Action />
                <Button type="submit" style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-border)' }}>Submit</Button>
            </Form>
        </Col>
    );
}

export default OnDate;
