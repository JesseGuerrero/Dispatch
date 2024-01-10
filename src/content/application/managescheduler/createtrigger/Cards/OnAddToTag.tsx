// SubscriberForm.tsx
import React from 'react';
import {
    Grid,
    Card,
    CardHeader,
    Divider,
    CardContent,
    Box,
    TextField,
    Button,
    Select,
    MenuItem,
    TableCell
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Actions from '../Actions'

const OnAddToTag: React.FC = () => {
    return (
        <Grid item xs={12}>
            <Card>
                <CardHeader title="On Add To Tag" />
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
                                label="Tag"
                                placeholder="Tag"
                            />
                            <Actions type={"OnAddToTag"} />
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

export default OnAddToTag;
