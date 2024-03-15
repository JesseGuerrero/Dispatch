import React, { useState, useEffect } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';
import './Schedule.css'
import {requestAPI} from "../Utils";

interface EmailRow {
    _id: string;
    firstName: string;
    tagName: string;
    subEmail: string;
    subscribed: boolean;
}

function Subscribers() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [rows, setRows] = useState<EmailRow[]>([]);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [page, setPage] = useState<number>(1);
    const [maxPage, setMaxPage] = useState<number>(1);

    useEffect(() => {
        const fetchData = async () => {
            const response = await requestAPI('/email/all', 'GET', {});
            const data = await response.json();
            setMaxPage((maxPages) => maxPages = data.totalPages)
            setRows(data.emails);
        };
        fetchData();
    }, []);

    const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery((s) => s = event.target.value);
        const response = await requestAPI(`/email/all/${searchQuery}?page=${page}`, "GET", {})
        const data = await response.json()
        setMaxPage((maxPages) => maxPages = data.totalPages)
        setRows((rows) => rows = data.emails);
    };

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedRows(rows.map(row => row._id));
        } else {
            setSelectedRows([]);
        }
    };

    const handleSelectRow = (id: string) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    const handlePageChange = async (newPage: number) => {
        if(newPage < 1)
            newPage = 1
        if(newPage >= maxPage)
            newPage = maxPage
        setPage((page) => page = newPage);
        const response = await requestAPI(`/email/all/${searchQuery}?page=${newPage}`, "GET", {})
        const data = await response.json()
        setRows((rows) => rows = data.emails);
    };

    return (
        <div>
            <Table striped bordered hover variant="dark" style={{ borderColor: 'var(--color-border)' }}>
                <thead style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <tr>
                    <th><Form.Check type="checkbox" onChange={handleSelectAll}
                                    checked={selectedRows.length === rows.length}/></th>
                    <th>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            Email
                            <Form.Control
                                type="text"
                                placeholder="Search by email"
                                value={searchQuery}
                                id="filter-table"
                                onChange={onChange}
                                style={{ width: 'auto', flexGrow: 1, maxWidth: '35ch', fontSize: '11pt', height: 'auto'}}
                                className="mt-2"
                            />
                        </div>
                    </th>
                    <th>
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            Name
                            <Form.Control
                                type="text"
                                placeholder="Search by name"
                                id="filter-table"
                                style={{width: 'auto', flexGrow: 1, maxWidth: '16ch', fontSize: '11pt', height: 'auto'}}
                                className="mt-2"
                            />
                        </div>
                    </th>
                    <th>Tag</th>
                    <th>
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            Subscribed
                            <Form.Select
                                className="mt-2"
                                style={{width: 'auto', fontSize: '11pt', height: 'auto'}}
                                // Add an onChange handler if needed
                            >
                                <option value="">All</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </Form.Select>
                        </div>
                    </th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {rows.map(row => (
                    <tr key={row._id}>
                        <td><Form.Check type="checkbox" checked={selectedRows.includes(row._id)}
                                        onChange={() => handleSelectRow(row._id)}/></td>
                        <td>{row.subEmail}</td>
                        <td>{row.firstName}</td>
                        <td>{row.tagName}</td>
                        <td>{row.subscribed ? 'Yes' : 'No'}</td>
                        <td>Delete</td>
                    </tr>
                ))}
                </tbody>
            </Table>

            <Pagination style={{ justifyContent: 'center' }}>
                <Pagination.First onClick={() => handlePageChange(1)} />
                <Pagination.Prev onClick={() => handlePageChange(page - 1)} />
                {page - 2 > 0 ? <Pagination.Item onClick={() => handlePageChange(page - 2)}>{page-2}</Pagination.Item> : <></>}
                {page - 1 > 0 ? <Pagination.Item onClick={() => handlePageChange(page - 1)}>{page-1}</Pagination.Item> : <></>}
                <Pagination.Item active>{page}</Pagination.Item>
                {page + 1 <= maxPage ? <Pagination.Item onClick={() => handlePageChange(page + 1)}>{page+1}</Pagination.Item> : <></>}
                {page + 2 <= maxPage ? <Pagination.Item onClick={() => handlePageChange(page + 2)}>{page+2}</Pagination.Item> : <></>}
                <Pagination.Next onClick={() => handlePageChange(page + 1)} />
                <Pagination.Last onClick={() => handlePageChange(maxPage)} />
            </Pagination>
        </div>
    );
}

export default Subscribers;
