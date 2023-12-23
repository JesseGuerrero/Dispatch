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
import MenuItem from '@mui/material/MenuItem';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

import Switch from '@mui/material/Switch';
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import {SidebarContext} from "../../../../contexts/SidebarContext";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];

function ChooseUser() {
  const { user } = useContext(SidebarContext);
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
