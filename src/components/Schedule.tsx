import React, { useState } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';
import './Schedule.css'

function Schedule() {
    // Explicitly define the type for selectedRows state
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const rows = [
        { id: 1, subject: 'Item 1', date: '2022-01-01', emailTemplate: 'Template A', tags: 'Tag1', actions: 'Edit/Delete' },
        { id: 2, subject: 'Item 2', date: '2022-02-01', emailTemplate: 'Template B', tags: 'Tag2', actions: 'Edit/Delete' },
        { id: 3, subject: 'Item 3', date: '2022-03-01', emailTemplate: 'Template C', tags: 'Tag3', actions: 'Edit/Delete' },
        { id: 4, subject: 'Item 4', date: '2022-04-01', emailTemplate: 'Template D', tags: 'Tag4', actions: 'Edit/Delete' },
        { id: 5, subject: 'Item 5', date: '2022-05-01', emailTemplate: 'Template E', tags: 'Tag5', actions: 'Edit/Delete' },
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
                    <th>Date</th>
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
                        <td>{row.date}</td>
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

export default Schedule;
