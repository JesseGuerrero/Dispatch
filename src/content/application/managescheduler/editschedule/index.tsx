import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import EditScheduleList from './EditScheduleList';

function EditSchedule() {
  return (
    <>
      <Helmet>
        <title>Edit Schedule</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
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
            <EditScheduleList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default EditSchedule;
