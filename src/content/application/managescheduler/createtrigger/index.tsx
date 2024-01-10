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

import OnAddToTag from "./Cards/OnAddToTag";
import OnDate from "./Cards/OnDate"
import OnDaysWithoutEmail from "./Cards/OnDaysWithoutEmail";
import OnSubscribe from "./Cards/OnSubscribe";
import OnDaysInNewsletter from "./Cards/OnDaysInNewsletter";


function AddSubscriber() {
  return (
    <>
      <Helmet>
        <title>Add Trigger</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Add Trigger"
          subHeading="Add one trigger to your newsletter"
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
