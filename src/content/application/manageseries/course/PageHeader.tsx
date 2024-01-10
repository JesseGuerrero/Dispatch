import { Typography, Button, Grid } from '@mui/material';

import {useContext} from "react";
import {NewsletterContext} from "../../../../contexts/NewsletterContext";

function PageHeader() {
    const { user } = useContext(NewsletterContext);
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Series
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, these are your newsletter series
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
