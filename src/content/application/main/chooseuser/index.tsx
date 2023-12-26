import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';
import {useContext, useEffect, useState} from 'react';

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

import {NewsletterContext} from "../../../../contexts/NewsletterContext";

function ChooseUser() {
  const { user } = useContext(NewsletterContext);
  const [isUserAdmin, setIsUserAdmin] = useState<boolean>(false);


  useEffect(() => {
    setIsUserAdmin(user.name == "Admin");
  }, [user.name]);

  return (
    <>
      <Helmet>
        <title>Forms - Components</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Choose user"
          subHeading="Login as newsletter user"
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
              <CardHeader title="Login" />
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
                        label="Username"
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                    />
                  </div>
                  <div>
                    <Button
                        sx={{margin: 1}}
                        variant="contained"
                    >
                      Login
                    </Button>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          {isUserAdmin && (
            <Grid item xs={12}>
            <Card>
              <CardHeader title="Create User" />
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
                        label="Username"
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Confirm"
                        type="password"
                    />
                  </div>
                  <div>
                    <Button
                        sx={{margin: 1}}
                        variant="contained"
                    >
                      Create User
                    </Button>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          )}
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Forgot Password" />
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
                        label="Email"
                    />
                  </div>
                  <div>
                    <Button
                        sx={{margin: 1}}
                        variant="contained"
                    >
                      Send Email
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

export default ChooseUser;
