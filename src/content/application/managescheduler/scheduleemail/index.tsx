import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider, Button
} from '@mui/material';
import Footer from 'src/components/Footer';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import AdapterDateFns from '@mui/pickers/adapter/date-fns';
import LocalizationProvider from '@mui/pickers/LocalizationProvider';
import DatePicker from '@mui/pickers/DatePicker';


function ScheduleEmail() {
  return (
    <>
      <Helmet>
        <title>Schedule Email</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Schedule Email"
          subHeading="Schedule email at some date"
          docs="https://material-ui.com/components/text-fields/"
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="New Scheduled email" />
              <Divider />
              <CardContent>
                <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': {m: 1, width: '25ch'}
                    }}
                    noValidate
                    autoComplete="off"
                >
                  <div>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                          value={selectedDate}
                          onChange={handleDateChange}
                          renderInput={(props) => <TextField {...props} label="Select Date" />}
                      />
                    </LocalizationProvider>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        placeholder="Email"
                    />
                  </div>
                  <div>
                    <Button
                        sx={{margin: 1}}
                        variant="contained"
                        startIcon={<AddTwoToneIcon fontSize="small"/>}
                    >
                      Add subscriber
                    </Button>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </>
  );
}

export default ScheduleEmail;
