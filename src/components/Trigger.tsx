import React, { useState } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';
import './Schedule.css'

function Trigger() {
// Explicitly define the type for selectedRows state
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const rows = [
        { id: 1, subject: 'Item 1', trigger: 'On Add To Tag' + ":tag1", emailTemplate: 'Template A', tags: 'Tag1', actions: 'Edit/Delete' },
        { id: 2, subject: 'Item 2', trigger: 'On Date' + ":date1", emailTemplate: 'Template B', tags: 'Tag2', actions: 'Edit/Delete' },
        { id: 3, subject: 'Item 3', trigger: 'On Days In Newsletter' + ":days", emailTemplate: 'Template C', tags: 'Tag3', actions: 'Edit/Delete' },
        { id: 4, subject: 'Item 4', trigger: 'On Days Without Email' + ":days", emailTemplate: 'Template D', tags: 'Tag4', actions: 'Edit/Delete' },
        { id: 5, subject: 'Item 5', trigger: 'On Subscribe', emailTemplate: 'Template E', tags: 'Tag5', actions: 'Edit/Delete' },
    ];

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedRows(rows.map(row => row.id));
        } else {
            setSelectedRows([]);
        }
    };

    const handleSelectRow = (id: number) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    return (
        <div>
            <Table striped bordered hover variant="dark" style={{ borderColor: 'var(--color-border)' }}>
                <thead style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <tr>
                    <th><Form.Check type="checkbox" onChange={handleSelectAll} checked={selectedRows.length === rows.length} /></th>
                    <th>Subject</th>
                    <th>Trigger</th>
                    <th>Email Template</th>
                    <th>Tags</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {rows.map(row => (
                    <tr key={row.id}>
                        <td><Form.Check type="checkbox" checked={selectedRows.includes(row.id)} onChange={() => handleSelectRow(row.id)} /></td>
                        <td>{row.subject}</td>
                        <td>{row.trigger}</td>
                        <td>{row.emailTemplate}</td>
                        <td>{row.tags}</td>
                        <td>{row.actions}</td>
                    </tr>
                ))}
                </tbody>
            </Table>

            <Pagination style={{ justifyContent: 'center' }}>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    );
}

export default Trigger;