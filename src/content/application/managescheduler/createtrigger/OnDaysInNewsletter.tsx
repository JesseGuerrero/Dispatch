// SubscriberForm.tsx
import React from 'react';
import { Grid, Card, CardHeader, Divider, CardContent, Box, TextField, Button } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const OnDaysInNewsletter: React.FC = () => {
    return (
        <Grid item xs={12}>
            <Card>
                <CardHeader title="New Subscriber" />
                <Divider />
                <CardContent>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="First Name"
                                placeholder="First Name"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <Button
                                sx={{ margin: 1 }}
                                variant="contained"
                                startIcon={<AddTwoToneIcon fontSize="small" />}
                            >
                                Place Trigger
                            </Button>
                        </div>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default OnDaysInNewsletter;
