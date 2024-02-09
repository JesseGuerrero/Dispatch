import React, { useState } from 'react';
import { Button, Container, Row, Col, Table, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CreateSeries.css';

function CreateSeries() {
    const [rows, setRows] = useState([
        { stageNumber: 1, name: 'Stage 1', date: new Date('2022-01-01'), template: 'Template A' },
        { stageNumber: 2, name: 'Stage 2', date: new Date('2022-02-01'), template: 'Template B' },
        { stageNumber: 3, name: 'Stage 3', date: new Date('2022-03-01'), template: 'Template C' },
        { stageNumber: 4, name: 'Stage 4', date: new Date('2022-04-01'), template: 'Template D' },
        { stageNumber: 5, name: 'Stage 5', date: new Date('2022-05-01'), template: 'Template E' },
    ]);
    const templateOptions = ['Template A', 'Template B', 'Template C', 'Template D', 'Template E', 'Template F'];

    // Function to handle changes in table rows
    const handleRowChange = (index: number, field: string, value: string) => {
        const updatedRows = rows.map((row, rowIndex) =>
            rowIndex === index ? { ...row, [field]: value } : row
        );
        setRows(updatedRows);
    };

    const handleNameChange = (index: number, newName: string) => {
        const updatedRows = rows.map((row, rowIndex) =>
            rowIndex === index ? { ...row, name: newName } : row
        );
        setRows(updatedRows);
    };

    const handleDateChange = (index: number, newDate: Date | null) => {
        // Default to current date if newDate is null
        const updatedDate = newDate ?? new Date();
        const updatedRows = rows.map((row, rowIndex) =>
            rowIndex === index ? { ...row, date: updatedDate } : row
        );
        setRows(updatedRows);
    };

    const handleAddStage = () => {
        const newStageNumber = rows.length + 1;
        const newStage = {
            stageNumber: newStageNumber,
            name: `Stage ${newStageNumber}`,
            date: new Date(), // Use a Date object here
            template: `Template ${String.fromCharCode(65 + rows.length % 26)}`,
        };
        setRows([...rows, newStage]);
    };

    const handleDeleteStage = (indexToDelete: number) => {
        const updatedRows = rows
            .filter((_, index) => index !== indexToDelete)
            .map((row, index) => ({ ...row, stageNumber: index + 1 }));
        setRows(updatedRows);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Table striped bordered hover variant="dark" className="table-custom">
                        <thead>
                        <tr>
                            <th>Stage Number</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Template</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td>{row.stageNumber}</td>
                                <td>
                                    <Form.Control
                                        type="text"
                                        value={row.name}
                                        onChange={(e) => handleNameChange(index, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <DatePicker
                                        selected={new Date(row.date)}
                                        onChange={(date) => handleDateChange(index, date)}
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <Form.Control
                                        type="text"
                                        value={row.template}
                                        onChange={(e) => handleRowChange(index, 'template', e.target.value)}
                                        list={`template-options-${index}`}
                                    />
                                    <datalist id={`template-options-${index}`}>
                                        {templateOptions.filter(option => option.toLowerCase().includes(row.template.toLowerCase())).map((filteredOption, optionIndex) => (
                                            <option key={optionIndex} value={filteredOption} />
                                        ))}
                                    </datalist>
                                </td>
                                <td>
                                    <Button variant="danger" onClick={() => handleDeleteStage(index)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Button onClick={handleAddStage} variant="primary">Add Stage</Button>
                    <Button variant="success" className="ms-2">Create Series</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default CreateSeries;

