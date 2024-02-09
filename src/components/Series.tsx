import React, { useState } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';
import './Schedule.css'

function Series() {
    // Explicitly define the type for selectedRows state
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const rows = [
        { id: 1, name: 'Item 1', stages: '2', actions: 'Edit/Delete' },
        { id: 2, name: 'Item 2', stages: '3', actions: 'Edit/Delete' },
        { id: 3, name: 'Item 3', stages: '9', actions: 'Edit/Delete' },
        { id: 4, name: 'Item 4', stages: '7', actions: 'Edit/Delete' },
        { id: 5, name: 'Item 5', stages: '8', actions: 'Edit/Delete' },
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
                    <th>Name</th>
                    <th>Stages</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {rows.map(row => (
                    <tr key={row.id}>
                        <td><Form.Check type="checkbox" checked={selectedRows.includes(row.id)} onChange={() => handleSelectRow(row.id)} /></td>
                        <td>{row.name}</td>
                        <td>{row.stages}</td>
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

export default Series;