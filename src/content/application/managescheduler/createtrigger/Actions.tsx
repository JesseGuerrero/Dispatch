// SubscriberForm.tsx
import React from 'react';
import {Grid, Card, CardHeader, Divider, CardContent, Box, TextField, Button, MenuItem, Select} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

interface Type {
    type: string
}

const Actions: React.FC<Type> = ({ type }) => {
    return (
        <>
            <Select
                value={''}
                onChange={(event) => {
                    // Handle the change here if needed
                }}
                sx = {{ m: 1, width: '25ch' }}
                displayEmpty
            >
                <MenuItem value="" disabled>Select an Action</MenuItem>
                <MenuItem value="send-email">Send Email</MenuItem>
                <MenuItem value="add-to-tag">Add To Tag</MenuItem>
                <MenuItem value="remove-from-tag">Remove From Tag</MenuItem>
                <MenuItem value="start-series">Start Series</MenuItem>
                <MenuItem value="stop-series">Stop Series</MenuItem>
            </Select>
            {{type}}
        </>
    );
};

export default Actions;
