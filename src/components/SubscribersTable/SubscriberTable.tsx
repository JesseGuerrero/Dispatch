import React, { useState, useEffect } from 'react';
import {Table, Pagination, Form, Button} from 'react-bootstrap';
import '../Schedule.css'
import {requestAPI, setFirstLetterUpper} from "../../Utils";

interface UpdateState {
    [key: string]: {
        subEmail?: string;
        firstName?: string;
        tagName?: string;
        subscribed?: boolean;
    };
}

interface SubscriberTableProps {
    setRows: React.Dispatch<React.SetStateAction<any[]>>;
    rows: any[];
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setFirstName: React.Dispatch<React.SetStateAction<string>>;
    firstName: string;
    setTagName: React.Dispatch<React.SetStateAction<string>>;
    tagName: string;
    setIsSubscribed: React.Dispatch<React.SetStateAction<boolean>>;
    isSubscribed: boolean;
    setMaxPage: React.Dispatch<React.SetStateAction<number>>;
    page: number;
}

const SubscriberTable: React.FC<SubscriberTableProps> = ({ setRows, rows, setEmail, email, firstName, setFirstName, tagName, setTagName, isSubscribed, setIsSubscribed, setMaxPage, page }) => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [update, setUpdate] = useState<UpdateState>({})

    useEffect(() => {
        const fetchData = async () => {
            updateTable()
        };
        fetchData();
    }, [email, firstName, tagName, isSubscribed, page]);

    const updateTable = async () => {
        const queryParams: string[] = [];
        if (email) queryParams.push(`subEmail=${email.toLowerCase()}`);
        if (firstName) queryParams.push(`firstName=${firstName.toLowerCase()}`);
        if (tagName) queryParams.push(`tagName=${tagName.toLowerCase()}`);
        queryParams.push(`isSubscribed=${isSubscribed}`);
        queryParams.push(`page=${page}`);

        const queryString = queryParams.join('&');
        const response = await requestAPI(`/email/searchall?${queryString}`, 'GET', {});
        const data = await response.json();
        setMaxPage((pages) => pages = data.totalPages);
        setRows((rows) => rows = data.emails);
    };

    const updateAll = () => {
        Object.entries(update).forEach(async ([id, updatedValues]) => {
            await requestAPI(`/email/${id}`, 'PUT', updatedValues);
        });
    }

    const deleteSelected = async () => {
        await Promise.all(selectedRows.map(id => requestAPI(`/email/${id}`, 'DELETE', {})));
        setSelectedRows([]);
        updateTable();
    };

    const onChangeEmail = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail((s) => s = event.target.value);
        setSelectedRows([]);
        updateTable()
    };
    const onChangeFirstName = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName((s) => s = event.target.value);
        setSelectedRows([]);
        updateTable()
    };
    const onChangeTagName = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setTagName((s) => s = event.target.value);
        setSelectedRows([]);
        updateTable()
    };
    const onChangeIsSubscribed = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        setIsSubscribed((s) => s = event.target.value);
        setSelectedRows([]);
        updateTable()
    };

    //----------------
    const onUpdateEmail = async (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        setRows(rows.map(row => {
            if (row._id === id) {
                return { ...row, subEmail: event.target.value.toLowerCase() };
            }
            return row;
        }));
        setUpdate(prevUpdate => ({
            ...prevUpdate,
            [id]: { ...prevUpdate[id], subEmail: event.target.value.toLowerCase() }
        }));
        if (!selectedRows.includes(id)) {
            setSelectedRows(prevSelectedRows => [...prevSelectedRows, id]);
        }
    };

    const onUpdateFirstName = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        setRows(rows.map(row => {
            if (row._id === id) {
                return { ...row, firstName: event.target.value.toLowerCase() };
            }
            return row;
        }));
        setUpdate(prevUpdate => ({
            ...prevUpdate,
            [id]: { ...prevUpdate[id], firstName: event.target.value.toLowerCase() }
        }));
        if (!selectedRows.includes(id)) {
            setSelectedRows(prevSelectedRows => [...prevSelectedRows, id]);
        }
    };

    const onUpdateTagName = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        setRows(rows.map(row => {
            if (row._id === id) {
                return { ...row, tagName: event.target.value.toLowerCase() };
            }
            return row;
        }));
        setUpdate(prevUpdate => ({
            ...prevUpdate,
            [id]: { ...prevUpdate[id], tagName: event.target.value.toLowerCase() }
        }));
        if (!selectedRows.includes(id)) {
            setSelectedRows(prevSelectedRows => [...prevSelectedRows, id]);
        }
    };

    const onUpdateIsSubscribed = (event: React.ChangeEvent<HTMLSelectElement>, id: string) => {
        setRows(rows.map(row => {
            if (row._id === id) {
                return { ...row, subscribed: event.target.value === 'yes' };
            }
            return row;
        }));
        setUpdate(prevUpdate => ({
            ...prevUpdate,
            [id]: { ...prevUpdate[id], subscribed: event.target.value === 'yes' }
        }));
        if (!selectedRows.includes(id)) {
            setSelectedRows(prevSelectedRows => [...prevSelectedRows, id]);
        }
    };

    //---------------

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

    return (
        <>
            <Table striped bordered hover variant="dark" style={{borderColor: 'var(--color-border)'}}>
                <thead style={{backgroundColor: 'var(--color-bg-secondary)'}}>
                <tr>
                    <th><Form.Check type="checkbox" onChange={handleSelectAll}
                                    checked={selectedRows.length === rows.length}/></th>
                    <th>
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            Email
                            <Form.Control
                                type="text"
                                placeholder="Search by email"
                                value={email}
                                id="filter-table"
                                onChange={onChangeEmail}
                                style={{width: 'auto', flexGrow: 1, maxWidth: '35ch', fontSize: '11pt', height: 'auto'}}
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
                                onChange={onChangeFirstName}
                                style={{width: 'auto', flexGrow: 1, maxWidth: '16ch', fontSize: '11pt', height: 'auto'}}
                                className="mt-2"
                            />
                        </div>
                    </th>
                    <th>
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            Tag
                            <Form.Control
                                type="text"
                                placeholder="Search by name"
                                id="filter-table"
                                onChange={onChangeTagName}
                                style={{width: 'auto', flexGrow: 1, maxWidth: '16ch', fontSize: '11pt', height: 'auto'}}
                                className="mt-2"
                            />
                        </div>
                    </th>
                    <th>
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            Subscribed
                            <Form.Select
                                className="mt-2"
                                style={{width: 'auto', fontSize: '11pt', height: 'auto'}}
                                onChange={onChangeIsSubscribed}
                            >
                                <option value="all">All</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </Form.Select>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                {rows.map(row => (
                    <tr key={row._id}>
                        <td><Form.Check type="checkbox" checked={selectedRows.includes(row._id)}
                                        onChange={() => handleSelectRow(row._id)}/></td>
                        <td>
                            <Form.Control
                                type="text"
                                value={row.subEmail}
                                id="filter-table"
                                onChange={(event) => onUpdateEmail(event, row._id)}
                                style={{
                                    width: '100%',
                                    flexGrow: 1,
                                    maxWidth: '60ch',
                                    fontSize: '11pt',
                                    height: 'auto',
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                    outline: 'none'
                                }}
                                className="mt-2"/>
                        </td>
                        <td>
                            <Form.Control
                                type="text"
                                value={setFirstLetterUpper(row.firstName)}
                                id="filter-table"
                                onChange={(event) => onUpdateFirstName(event, row._id)}
                                style={{
                                    width: '100%',
                                    flexGrow: 1,
                                    maxWidth: '60ch',
                                    fontSize: '11pt',
                                    height: 'auto',
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                    outline: 'none'
                                }}
                                className="mt-2"/>
                        </td>
                        <td>
                            <Form.Control
                                type="text"
                                value={row.tagName}
                                id="filter-table"
                                onChange={(event) => onUpdateTagName(event, row._id)}
                                style={{
                                    width: '100%',
                                    flexGrow: 1,
                                    maxWidth: '60ch',
                                    fontSize: '11pt',
                                    height: 'auto',
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                    outline: 'none'
                                }}
                                className="mt-2"/>
                        </td>
                        <td>
                            <Form.Select
                                className="mt-2 dark-select"
                                onChange={(event) => onUpdateIsSubscribed(event, row._id)}
                                style={{
                                    width: 'auto',
                                    fontSize: '11pt',
                                    height: 'auto',
                                    backgroundColor: '#333',
                                    outline: 'none'
                                }}
                                value={row.subscribed ? 'yes' : 'no'}
                            >
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </Form.Select>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <div style={{display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px', marginTop: '10px'}}>
                <Button variant="primary" onClick={updateAll}>Update</Button>
                <Button variant="danger" onClick={deleteSelected}>Delete</Button>
            </div>
        </>
)
    ;
}

export default SubscriberTable;
