import React, { useState, useEffect } from 'react';
import {Table, Pagination, Form, Button} from 'react-bootstrap';
import './Schedule.css'
import {requestAPI, setFirstLetterUpper} from "../Utils";
import SubscriberPagination from "./SubscribersTable/SubscriberPagination.tsx";
import SubscriberTable from "./SubscribersTable/SubscriberTable.tsx";

interface EmailRow {
    _id: string;
    firstName: string;
    tagName: string;
    subEmail: string;
    subscribed: boolean;
}

function Subscribers() {
    const [email, setEmail] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [tagName, setTagName] = useState<string>('');
    const [isSubscribed, setIsSubscribed] = useState<string>('All');
    const [rows, setRows] = useState<EmailRow[]>([]);
    const [page, setPage] = useState<number>(1);
    const [maxPage, setMaxPage] = useState<number>(1);

    const handlePageChange = async (newPage: number) => {
        if(newPage < 1)
            newPage = 1
        if(newPage >= maxPage)
            newPage = maxPage
        setPage((page) => page = newPage);
        const queryParams: string[] = [];
        if (email) queryParams.push(`subEmail=${email.toLowerCase()}`);
        if (firstName) queryParams.push(`firstName=${firstName.toLowerCase()}`);
        if (tagName) queryParams.push(`tagName=${tagName.toLowerCase()}`);
        queryParams.push(`isSubscribed=${isSubscribed.toLowerCase()}`);
        queryParams.push(`page=${page}`);

        const queryString = queryParams.join('&');
        const response = await requestAPI(`/email/searchall?${queryString}`, 'GET', {});
        const data = await response.json()
        setRows((rows) => rows = data.emails);
    };

    return (
        <div>
            <SubscriberTable setRows={setRows} rows={rows} setEmail={setEmail} email={email} firstName={firstName} setFirstName={setFirstName} tagName={tagName} setTagName={setTagName} isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} setMaxPage={setMaxPage} page={page}/>
            <SubscriberPagination handlePageChange={handlePageChange} page={page} maxPage={maxPage} />
        </div>
    );
}

export default Subscribers;
