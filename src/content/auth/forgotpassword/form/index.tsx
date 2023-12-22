import {Box, Button, Checkbox, Container, FormControlLabel, Grid, Stack, Typography} from '@mui/material';

import { Link } from 'react-router-dom';

import {styled, useTheme} from '@mui/material/styles';
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import FormInput from "../../../../components/FormInput";
import LoadingButton from "@mui/lab/LoadingButton";
import {zodResolver} from "@hookform/resolvers/zod";
import {literal, object, string, TypeOf} from "zod";
import TextField from "@mui/material/TextField";

// 👇 Styled React Route Dom Link Component
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #3683dc;
  &:hover {
    text-decoration: underline;
    color: #5ea1b6;
  }
`;

// 👇 Login Schema with Zod
const loginSchema = object({
  email: string().min(1, 'Email is required').email('Email is invalid'),
  password: string()
      .min(1, 'Password is required')
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters'),
  persistUser: literal(true).optional(),
});

// 👇 Infer the Schema to get the TS Type
type ILogin = TypeOf<typeof loginSchema>;

function ForgotPasswordForm() {
  const theme = useTheme();
  // 👇 Default Values
  const defaultValues: ILogin = {
    email: '',
    password: '',
  };

  // 👇 The object returned from useForm Hook
  const methods = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  // 👇 Submit Handler
  const onSubmitHandler: SubmitHandler<ILogin> = (values: ILogin) => {
    console.log(values);
  };
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center'}}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <FormProvider {...methods}>
            <Grid
                container
                sx={{
                  boxShadow: { sm: '0 0 5px #ddd' },
                  py: '6rem',
                  px: '1rem',
                  backgroundColor: theme.palette.background.paper
                }}
            >
              <Grid
                  item
                  container
                  justifyContent='center'
                  rowSpacing={5}
                  sx={{
                    maxWidth: { sm: '45rem' },
                    marginInline: 'auto',
                  }}
              >
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                  <Box
                      display='flex'
                      flexDirection='column'
                      component='form'
                      noValidate
                      autoComplete='off'
                      onSubmit={methods.handleSubmit(onSubmitHandler)}
                  >
                    <Typography
                        variant='h6'
                        component='h1'
                        sx={{ textAlign: 'center', mb: '1.5rem' }}
                    >
                      Send Password Reset Email
                    </Typography>
                      <TextField
                          required
                          type='email'
                          name='email'
                          label='Email'
                          variant="filled"
                          sx={{mb: '1rem'}}
                      />
                    <LoadingButton
                        loading={false}
                        type='submit'
                        variant='contained'
                        sx={{
                          py: '0.8rem',
                          mt: 2,
                          width: '80%',
                          marginInline: 'auto',
                        }}
                        href={'#'}
                    >
                      Send Email
                    </LoadingButton>
                  </Box>
                </Grid>
              </Grid>
              <Grid container justifyContent='center'>
                <Stack sx={{ mt: '3rem', textAlign: 'center' }}>
                  <Typography sx={{ fontSize: '0.9rem', mb: '1rem' }}>
                    Need an account?{' '}
                    <LinkItem to='/Dispatch/signup'>Sign up here</LinkItem>
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem' }}>
                    Remembered it? Go to{' '}
                    <LinkItem to='/Dispatch/login'>login?</LinkItem>
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ForgotPasswordForm;
