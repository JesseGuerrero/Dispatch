import React, { useState } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';
import './Schedule.css'

function EditSubscriber() {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query
    const [rows, setRows] = useState([
        { id: 1, email: 'Item 1', firstName: '2', tags: '8', courses: '8', actions: 'Save/Delete' },
        { id: 2, email: 'Item 2', firstName: '3', tags: '8', courses: '8', actions: 'Save/Delete' },
        { id: 3, email: 'Item 3', firstName: '9', tags: '8', courses: '8', actions: 'Save/Delete' },
        { id: 4, email: 'Item 4', firstName: '7', tags: '8', courses: '8', actions: 'Save/Delete' },
        { id: 5, email: 'Item 5', firstName: '8', tags: '8', courses: '8', actions: 'Save/Delete' },
    ]);

    const filteredRows = rows.filter(row =>
        row.email.toLowerCase().includes(searchQuery.toLowerCase())
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

    const handleBoxChange = (index: number, newName: string) => {
        const updatedRows = rows.map((row, rowIndex) =>
            rowIndex === index ? { ...row, name: newName } : row
        );
        setRows(updatedRows);
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
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Tags</th>
                    <th>Courses</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredRows.map(row => (
                    <tr key={row.id}>
                        <td><Form.Check type="checkbox" checked={selectedRows.includes(row.id)}
                                        onChange={() => handleSelectRow(row.id)}/></td>
                        <td>
                            <Form.Control
                            type="text"
                            value={row.email}
                            onChange={(e) => handleBoxChange(row.id, e.target.value)}
                            />
                        </td>
                        <td>
                            <Form.Control
                                type="text"
                                value={row.firstName}
                                onChange={(e) => handleBoxChange(row.id, e.target.value)}
                            />
                        </td>
                        <td>
                            <Form.Control
                                type="text"
                                value={row.tags}
                                onChange={(e) => handleBoxChange(row.id, e.target.value)}
                            />
                        </td>
                        <td>
                            <Form.Control
                                type="text"
                                value={row.courses}
                                onChange={(e) => handleBoxChange(row.id, e.target.value)}
                            />
                        </td>
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

export default EditSubscriber;