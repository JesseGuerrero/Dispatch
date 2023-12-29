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
import StyledTextareaAutosize from "../../../../components/EditableTextArea";

function RemoveEmailFromTag() {
  return (
      <>
        <Helmet>
          <title>Remove emails from tags</title>
        </Helmet>
        <PageTitleWrapper>
          <PageTitle
              heading="Remove emails from tags"
              subHeading="Remove emails on left from tags on right"
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
                <CardHeader title="New Tags" />
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
                        <StyledTextareaAutosize
                            minRows={3}
                            placeholder="Remove Emails"
                            style={{width: '20%'}}
                        />
                        <StyledTextareaAutosize
                            minRows={3}
                            placeholder="Tag Names"
                            style={{width: '20%'}}
                        />
                    </div>
                    <div>
                      <Button
                          sx={{margin: 1}}
                          variant="contained"
                      >
                        Add emails to tags
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

export default RemoveEmailFromTag;
