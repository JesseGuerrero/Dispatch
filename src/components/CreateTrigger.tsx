import React from 'react';
import { Container, Row, } from 'react-bootstrap';
import OnAddToTag from "./TriggerForms/OnAddToTag";
import OnDate from "./TriggerForms/OnDate";
import OnDaysInNewsletter from "./TriggerForms/OnDaysInNewsletter";
import OnDaysWithoutEmail from "./TriggerForms/OnDaysWithoutEmail";
import OnSubscribe from "./TriggerForms/OnSubscribe";
import './Broadcast.css';

function CreateTrigger() {
    // Dummy handleSubmit function for demonstration
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
        <Container className="broadcast-container">
            <Row>
                <OnAddToTag />
                <OnDate />
                <OnDaysInNewsletter />
                <OnDaysWithoutEmail />
                <OnSubscribe />
            </Row>
        </Container>
    );
}

export default CreateTrigger;
