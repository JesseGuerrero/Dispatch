import React, {useEffect, useRef, useState} from 'react';
import {Button, Form, Pagination, Table} from "react-bootstrap";
import EmailEditor from 'react-email-editor';
import './Schedule.css'
import {requestAPI, setFirstLetterUpper} from "../Utils.ts";

interface Template {
    _id: string;
    userId: string;
    name: string;
    subject: string;
    design: string;
    html: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface UpdateState {
    [key: string]: {
        _id?: string;
        userId?: string;
        name?: string;
        subject?: string;
        body?: string;
        createdAt?: string;
        updatedAt?: string;
        __v?: number;
    };
}

const EditEmail = () => {
    const emailEditorRef = useRef<any>(null);
    const [responseText, setResponseText] = useState("");
    const [templateName, setTemplateName] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [rows, setRows] = useState<Template[]>([]);
    const [selected, setSelected] = useState<string>("")
    const [page, setPage] = useState<number>(1);
    const [maxPage, setMaxPage] = useState<number>(1);
    const [update, setUpdate] = useState<UpdateState>({})
    const [design, setDesign] = useState<string>("")
    const [html, setHtml] = useState<string>("")


    useEffect(() => {
        const fetchData = async () => {
            updateTable()
        };
        fetchData();
    }, [templateName, subject, page, maxPage]);

    useEffect(() => {
        if (emailEditorRef.current && emailEditorRef.current.editor && design) {
            emailEditorRef.current.editor.loadDesign(design);
        }
    }, [design]);

    const onEditorLoad = () => {
        if (design) {
            emailEditorRef.current.editor.loadDesign(design);
        }
    };

    const handleSelect = (id: string) => {
        setSelected(id);
        const selectedTemplate = rows.find(row => row._id === id);
        if (selectedTemplate) {
            setDesign(selectedTemplate.design);
            setHtml(selectedTemplate.html)
        }
    };

    const saveDesign = async () => {
        if (emailEditorRef.current && emailEditorRef.current.editor) {
            emailEditorRef.current.editor.exportHtml(async (data: { design: string; html: string }) => {
                const { design, html } = data;
                const selectedRow = rows.find(row => row._id === selected);
                if (selectedRow) {
                    try {
                        const response = await requestAPI(`/template/${selected}`, 'PUT', {
                            name: selectedRow.name,
                            subject: selectedRow.subject,
                            html: html,
                            design: design,
                        });
                        if (response.ok) {
                            setResponseText(`${selectedRow.name} template updated successfully!`);
                            const updatedRows = rows.map(row => {
                                if (row._id === selected) {
                                    return { ...row, design, html };
                                }
                                return row;
                            });
                            setRows(updatedRows);
                        } else {
                            const errorText = await response.text();
                            setResponseText(`Failed to update template: ${errorText}`);
                        }
                    } catch (error) {
                        console.error('Error saving design:', error);
                        setResponseText('Error saving design. Please try again.');
                    }
                } else {
                    setResponseText('No template selected. Please select a template to save.');
                }
            });
        } else {
            setResponseText('Email editor is not loaded. Please wait for the editor to load.');
        }
    };


    const updateTable = async () => {
        const queryParams: string[] = [];
        if (templateName) queryParams.push(`name=${templateName.toLowerCase()}`);
        if (subject) queryParams.push(`subject=${subject.toLowerCase()}`);
        queryParams.push(`page=${page}`);

        const queryString = queryParams.join('&');
        const response = await requestAPI(`/template/searchall?${queryString}`, 'GET', {});
        const data = await response.json();
        setMaxPage((pages) => pages = data.totalPages);
        setRows((rows) => rows = data['templates']);
        const firstRow = data['templates'][0]
        setSelected(firstRow._id)
        setDesign(firstRow.design);
        setHtml(firstRow.html)

    };
    const onChangeTemplateName = async(event: React.ChangeEvent<HTMLInputElement>) => {
        setTemplateName((s) => s = event.target.value)
        updateTable()
    }

    const onChangeSubject = async(event: React.ChangeEvent<HTMLInputElement>) => {
        setSubject((s) => s = event.target.value)
        updateTable()
    }

    const handlePageChange = async (newPage: number) => {
        if(newPage < 1)
            newPage = 1
        if(newPage >= maxPage)
            newPage = maxPage
        setPage((page) => page = newPage);
        const queryParams: string[] = [];
        if (templateName) queryParams.push(`name=${templateName.toLowerCase()}`);
        if (subject) queryParams.push(`subject=${subject.toLowerCase()}`);
        queryParams.push(`page=${newPage}`);

        const queryString = queryParams.join('&');
        const response = await requestAPI(`/template/searchall?${queryString}`, 'GET', {});
        const data = await response.json()
        setRows((rows) => rows = data.templates);
    };

    const updateAll = () => {
        Object.entries(update).forEach(async ([id, updatedValues]) => {
            await requestAPI(`/template/${id}`, 'PUT', updatedValues);
        });
    }

    const deleteSelected = async() => {
        await requestAPI(`/template/${selected}`, 'DELETE', {});
        updateTable()
    }

    const onUpdateTemplateName = async (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => {
        setRows(rows.map(row => {
            if (row._id === id) {
                return { ...row, name: event.target.value.toLowerCase() };
            }
            return row;
        }));
        setUpdate(prevUpdate => ({
            ...prevUpdate,
            [id]: { ...prevUpdate[id], name: event.target.value.toLowerCase() }
        }));
    };

    const onUpdateSubject = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => {
        setRows(rows.map(row => {
            if (row._id === id) {
                return { ...row, subject: event.target.value.toLowerCase() };
            }
            return row;
        }));
        setUpdate(prevUpdate => ({
            ...prevUpdate,
            [id]: { ...prevUpdate[id], subject: event.target.value.toLowerCase() }
        }));
    };



    return (
        <>
            <EmailEditor ref={emailEditorRef} onLoad={onEditorLoad}/>
            <p>{responseText}</p>
            <Table striped bordered hover variant="dark" style={{borderColor: 'var(--color-border)'}}>
                <thead style={{backgroundColor: 'var(--color-bg-secondary)'}}>
                <tr>
                    <th>
                        Select
                    </th>
                    <th>
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            Template name
                            <Form.Control
                                type="text"
                                placeholder="Search by template name"
                                id="filter-table"
                                onChange={onChangeTemplateName}
                                style={{width: 'auto', flexGrow: 1, maxWidth: '25ch', fontSize: '11pt', height: 'auto'}}
                                className="mt-2"
                            />
                        </div>
                    </th>
                    <th>
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            Subject
                            <Form.Control
                                type="text"
                                placeholder="Search by subject"
                                id="filter-table"
                                onChange={onChangeSubject}
                                style={{width: 'auto', flexGrow: 1, maxWidth: '40ch', fontSize: '11pt', height: 'auto'}}
                                className="mt-2"
                            />
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                {rows.map(row => (
                    <tr key={row._id}>
                        <td>
                            <Form.Check
                                type="checkbox"
                                checked={selected === row._id}
                                onChange={() => handleSelect(row._id)}
                            />
                        </td>
                        <td>
                            <Form.Control
                                type="text"
                                value={setFirstLetterUpper(row.name)}
                                id="filter-table"
                                onChange={(event) => onUpdateTemplateName(event, row._id)}
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
                                value={setFirstLetterUpper(row.subject)}
                                id="filter-table"
                                onChange={(event) => onUpdateSubject(event, row._id)}
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
                    </tr>
                ))}
                </tbody>
            </Table>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                marginBottom: '20px',
                marginTop: '10px'
            }}>
                <Button variant="primary" onClick={saveDesign}>Save Design</Button>
                <Button variant="primary" onClick={updateAll}>Update</Button>
                <Button variant="danger" onClick={deleteSelected}>Delete</Button>
            </div>
            <Pagination style={{justifyContent: 'center'}}>
                <Pagination.First onClick={() => handlePageChange(1)}/>
                <Pagination.Prev onClick={() => handlePageChange(page - 1)}/>
                {page - 2 > 0 ?
                    <Pagination.Item onClick={() => handlePageChange(page - 2)}>{page - 2}</Pagination.Item> : <></>}
                {page - 1 > 0 ?
                    <Pagination.Item onClick={() => handlePageChange(page - 1)}>{page - 1}</Pagination.Item> : <></>}
                <Pagination.Item active>{page}</Pagination.Item>
                {page + 1 <= maxPage ?
                    <Pagination.Item onClick={() => handlePageChange(page + 1)}>{page + 1}</Pagination.Item> : <></>}
                {page + 2 <= maxPage ?
                    <Pagination.Item onClick={() => handlePageChange(page + 2)}>{page + 2}</Pagination.Item> : <></>}
                <Pagination.Next onClick={() => handlePageChange(page + 1)}/>
                <Pagination.Last onClick={() => handlePageChange(maxPage)}/>
            </Pagination>
        </>
    );
}

export default EditEmail;
