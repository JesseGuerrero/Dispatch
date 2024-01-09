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

import OnAddToTag from "./OnAddToTag";
import OnDate from "./OnDate"
import OnDaysWithoutEmail from "./OnDaysWithoutEmail";
import OnSubscribe from "./OnSubscribe";
import OnDaysInNewsletter from "./OnDaysInNewsletter";


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
          <OnAddToTag />
          <OnDate />
          <OnDaysInNewsletter />
          <OnDaysWithoutEmail />
          <OnSubscribe />
        </Grid>
      </Container>
      <Footer/>
    </>
  );
}

export default AddSubscriber;
