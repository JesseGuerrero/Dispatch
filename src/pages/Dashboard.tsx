import React, {ComponentType, useState} from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './Dashboard.css';
import Overview from "../components/Overview";
import Broadcast from "../components/Broadcast";
import Calendar from "../components/Calendar";
import CreateEmail from "../components/CreateEmailSimple";
import EditEmail from "../components/EditEmail";
import DeleteEmail from "../components/DeleteEmail";
import Schedule from "../components/Schedule";
import ScheduleEmail from "../components/ScheduleEmail";
import Series from "../components/Series";
import CreateSeries from "../components/CreateSeries";
import Subscribers from "../components/Subscribers";
import AddSubscriber from "../components/AddSubscriber";
import EditSubscriber from "../components/EditSubscriber";
import Tags from "../components/Tags";
import AddTags from "../components/AddTags";
import Settings from "../components/Settings"; // Ensure you have this CSS file

const Dashboard = () => {
    const [contentComponent, setContentComponent] = useState<React.ReactNode>(null);
    // Example categories and options
    const menuOptions = {
        '': ['Broadcast'],
        // '': ['Overview', 'Broadcast', 'Calendar', 'Settings'],
        // 'Write Email': ['Create Email', 'Edit Email', 'Delete Email'],
        'Write Email': ['Create Email', 'Edit Email'],
        // 'Manage Scheduler': ['Schedule', 'Schedule Email'],
        // 'Manage Series': ['Series', 'Create Series'],
        // 'Manage Newsletter': ['Subscribers', 'Add Subscriber', 'Tags', 'Add Tag'],
        'Manage Newsletter': ['Subscribers', 'Add Subscriber', 'Add Tag'],
        // ... add more categories and options here
    };

    type ComponentMapType = { [key: string]: ComponentType };
    const components: ComponentMapType = {
        // "Overview": Overview, "Broadcast": Broadcast, "Calendar": Calendar, "Settings": Settings,
        "Broadcast": Broadcast,
        "Create Email": CreateEmail, "Edit Email": EditEmail, "Delete Email": DeleteEmail,
        // "Schedule": Schedule, "Schedule Email": ScheduleEmail,
        // "Series": Series, "Create Series": CreateSeries,
        "Subscribers": Subscribers, "Add Subscriber": AddSubscriber, "Tags": Tags, "Add Tag": AddTags,
    };
    const componentMap: Record<string, React.ReactNode> = {};
    Object.values(menuOptions).flat().forEach(option => {
        const Component = components[option];
        componentMap[option] = Component ? <Component /> : <div>Component not found for {option}</div>;
    });

    const handleOptionClick = (option: string) => {
        const componentName = option;
        const Component = componentMap[componentName] || <div>No component found for {option}</div>;
        setContentComponent(Component);
    };

    return (
        <Container fluid className="dashboard-container">
            <Row>
                <Col md={2} className="sidebar">
                    {Object.entries(menuOptions).map(([category, options], idx) => (
                        <div key={idx}>
                            <h5>{category}</h5>
                            <ListGroup>
                                {options.map((option, idx) => (
                                    <ListGroup.Item key={idx} onClick={() => handleOptionClick(option)} action>
                                        {option}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    ))}
                </Col>
                <Col md={10} className="content">
                    {/* Render the selected component */}
                    {contentComponent}
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
