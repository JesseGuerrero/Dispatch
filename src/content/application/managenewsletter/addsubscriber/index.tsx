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

function AddSubscriber() {
  return (
    <>
      <Helmet>
        <title>Add Subscriber</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Add Subscriber"
          subHeading="Add one subscriber to your newsletter"
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
              <CardHeader title="New Subscriber" />
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
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        placeholder="First Name"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
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

export default AddSubscriber;
