import React from 'react';
import { Form } from 'react-bootstrap';
import '../Broadcast.css'; // Make sure to create this CSS file

function Action() {
    return (
        <Form.Group>
            <Form.Label style={{ color: 'var(--color-text)' }}>Action</Form.Label>
            <Form.Select name="action-1" style={{ color: 'var(--color-text)', backgroundColor: 'var(--color-bg)' }}>
                <option>Send Email</option>
                <option>Add Tag</option>
                <option>Remove Tag</option>
                <option>Start Series</option>
                <option>Stop Series</option>
            </Form.Select>
        </Form.Group>
    );
}

export default Action;
