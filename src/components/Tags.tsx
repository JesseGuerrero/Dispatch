import React, { useState } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';
import './Schedule.css'

function Tags() {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query
    const rows = [
        { id: 1, tag: 'Item 1', emails: '2', actions: 'Delete' },
        { id: 2, tag: 'Item 2', emails: '3', actions: 'Delete' },
        { id: 3, tag: 'Item 3', emails: '9', actions: 'Delete' },
        { id: 4, tag: 'Item 4', emails: '7', actions: 'Delete' },
        { id: 5, tag: 'Item 5', emails: '8', actions: 'Delete' },
    ];

    const filteredRows = rows.filter(row =>
        row.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedRows(filteredRows.map(row => row.id));
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
            <Form.Group controlId="search">
                <Form.Control
                    type="text"
                    placeholder="Search by email"
                    value={searchQuery}
                    id={"filter-table"}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </Form.Group>

            <Table striped bordered hover variant="dark" style={{ borderColor: 'var(--color-border)' }}>
                <thead style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <tr>
                    <th><Form.Check type="checkbox" onChange={handleSelectAll}
                                    checked={selectedRows.length === filteredRows.length}/></th>
                    <th>Tag</th>
                    <th>Emails</th>
                </tr>
                </thead>
                <tbody>
                {filteredRows.map(row => (
                    <tr key={row.id}>
                        <td><Form.Check type="checkbox" checked={selectedRows.includes(row.id)}
                                        onChange={() => handleSelectRow(row.id)}/></td>
                        <td>{row.tag}</td>
                        <td>{row.emails}</td>
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

export default Tags;
