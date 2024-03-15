import React, { useState } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';
import './Schedule.css'
import {requestAPI} from "../Utils";

interface EmailRow {
    id: number;
    email: string;
    firstName: string;
    tags: string;
    courses: string;
    actions: string;
}

function Subscribers() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [rows, setRows] = useState<EmailRow[]>([]);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        const response = await requestAPI("/email/all", "GET", {})
        const data = await response.json()
        setRows(data.emails);
    };

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
            <Form.Group controlId="search">
                <Form.Control
                    type="text"
                    placeholder="Search by email"
                    value={searchQuery}
                    id={"filter-table"}
                    onChange={onChange}
                />
            </Form.Group>

            <Table striped bordered hover variant="dark" style={{ borderColor: 'var(--color-border)' }}>
                <thead style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <tr>
                    <th><Form.Check type="checkbox" onChange={handleSelectAll}
                                    checked={selectedRows.length === rows.length}/></th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Tags</th>
                    <th>Courses</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {rows.map(row => (
                    <tr key={row.id}>
                        <td><Form.Check type="checkbox" checked={selectedRows.includes(row.id)}
                                        onChange={() => handleSelectRow(row.id)}/></td>
                        <td>{row.email}</td>
                        <td>{row.firstName}</td>
                        <td>{row.tags}</td>
                        <td>{row.courses}</td>
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

export default Subscribers;
