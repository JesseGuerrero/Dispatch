import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import {styled, useTheme} from '@mui/material/styles';
import Logo from 'src/components/LogoSign';
import LoginForm from './form';

const AuthWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Login() {
    const theme = useTheme();
    return (
    <AuthWrapper>
      <Helmet>
        <title>Tokyo Free Black React Typescript Admin Dashboard</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <Logo />
        </Box>
        <Card sx={{ p: 10, mb: 10, boxShadow: 'none', backgroundColor: theme.palette.background.default, pt: '5px' }}>
          <LoginForm />
        </Card>
      </Container>
    </AuthWrapper>
    );
}

export default Login;
