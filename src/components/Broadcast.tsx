import React, {useEffect, useRef, useState} from 'react';
import {Form, Button, Container, Row, Col, Table, Pagination} from 'react-bootstrap';
import './Broadcast.css';
import {requestAPI, setFirstLetterUpper} from "../Utils.ts";
import EmailEditor from "react-email-editor"; // Make sure to create this CSS file

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

function Broadcast() {
    const emailEditorRef = useRef<any>(null);
    const [templateName, setTemplateName] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [rows, setRows] = useState<Template[]>([]);
    const [selected, setSelected] = useState<string>("")
    const [page, setPage] = useState<number>(1);
    const [maxPage, setMaxPage] = useState<number>(1);
    const [design, setDesign] = useState<string>("")
    const [html, setHtml] = useState<string>("")
    const [currentTemplate, setCurrentTemplate] = useState<string>("");

    const handleSubmit = () => {

    };

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
        if(firstRow) {
            setSelected((s) => s = firstRow._id)
            setDesign((s) => s = firstRow.design);
            setHtml((s) => s = firstRow.html)
            setCurrentTemplate((s) => s = firstRow.name)
        }
    };

    const handleSelect = (id: string) => {
        setSelected(id);
        const row = rows.find(row => row._id === id);
        if(row) {
            setDesign(row.design);
            setHtml(row.html)
            setCurrentTemplate(row.name)
            emailEditorRef.current.editor.loadDesign(row.design);
        }
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

    return (
        <Container className="broadcast-container">
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit} className="broadcast-form">
                        <h2>By Tag</h2>
                        <Form.Group>
                            <Form.Label>Tag</Form.Label>
                            <Form.Control type="text" name="tag" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Template</Form.Label>
                            <Form.Control type="text" name="Email Template" value={currentTemplate} />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <Form onSubmit={handleSubmit} className="broadcast-form">
                        <h2>By Email</h2>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Template</Form.Label>
                            <Form.Control type="text" name="Email Template" value={currentTemplate} />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <EmailEditor ref={emailEditorRef}/>
                </Col>
            </Row>
            <Row>
                <Col>
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
                                        style={{
                                            width: 'auto',
                                            flexGrow: 1,
                                            maxWidth: '25ch',
                                            fontSize: '11pt',
                                            height: 'auto'
                                        }}
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
                                        style={{
                                            width: 'auto',
                                            flexGrow: 1,
                                            maxWidth: '40ch',
                                            fontSize: '11pt',
                                            height: 'auto'
                                        }}
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
                                    {setFirstLetterUpper(row.name)}
                                </td>
                                <td>
                                    {setFirstLetterUpper(row.subject)}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    <Pagination style={{justifyContent: 'center'}}>
                        <Pagination.First onClick={() => handlePageChange(1)}/>
                        <Pagination.Prev onClick={() => handlePageChange(page - 1)}/>
                        {page - 2 > 0 ?
                            <Pagination.Item
                                onClick={() => handlePageChange(page - 2)}>{page - 2}</Pagination.Item> : <></>}
                        {page - 1 > 0 ?
                            <Pagination.Item
                                onClick={() => handlePageChange(page - 1)}>{page - 1}</Pagination.Item> : <></>}
                        <Pagination.Item active>{page}</Pagination.Item>
                        {page + 1 <= maxPage ?
                            <Pagination.Item
                                onClick={() => handlePageChange(page + 1)}>{page + 1}</Pagination.Item> : <></>}
                        {page + 2 <= maxPage ?
                            <Pagination.Item
                                onClick={() => handlePageChange(page + 2)}>{page + 2}</Pagination.Item> : <></>}
                        <Pagination.Next onClick={() => handlePageChange(page + 1)}/>
                        <Pagination.Last onClick={() => handlePageChange(maxPage)}/>
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
}

export default Broadcast;
