import { Container, Grid, Box, Typography, Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '../../../../components/FormInput';
import { LinkItem } from '../../login/form';
import {useTheme} from "@mui/material/styles";
import TextField from '@mui/material/TextField';

// 👇 SignUp Schema with Zod
const signupSchema = object({
  name: string().min(1, 'Name is required').max(70),
  email: string().min(1, 'Email is required').email('Email is invalid'),
  password: string()
      .min(1, 'Password is required')
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters'),
  passwordConfirm: string().min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: 'Passwords do not match',
});

// 👇 Infer the Schema to get TypeScript Type
type ISignUp = TypeOf<typeof signupSchema>;

function SignUpForm() {
  const theme = useTheme();
  const defaultValues: ISignUp = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  // 👇 Object containing all the methods returned by useForm
  const methods = useForm<ISignUp>({
    resolver: zodResolver(signupSchema),
    defaultValues,
  });

  // 👇 Form Handler
  const onSubmitHandler: SubmitHandler<ISignUp> = (values: ISignUp) => {
    console.log(JSON.stringify(values, null, 4));
  };
  return (
      <Container
          maxWidth="lg"
          sx={{ backgroundColor: theme.palette.background.default}}
      >
        <Grid
            container
            justifyContent='center'
            alignItems='center'
            sx={{ width: '100%', height: '100%' }}
        >
          <Grid
              item md={10} lg={8} mx="auto"
              sx={{ backgroundColor: theme.palette.background.paper }}
          >
            <Grid
                container
                sx={{
                  boxShadow: { sm: '0 0 5px #ddd' },
                  py: '6rem',
                  px: '1rem',
                  pt: '3em',
                  pb: '3em'
                }}
            >
              <FormProvider {...methods}>
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
                        sx={{ }}
                        onSubmit={methods.handleSubmit(onSubmitHandler)}
                    >
                      <Typography
                          variant='h6'
                          component='h1'
                          sx={{ textAlign: 'center', mb: '1.5rem' }}
                      >
                        Create new your account
                      </Typography>

                      <TextField
                          variant="filled"
                          label='Name'
                          name='name'
                          sx={{mb: '1rem'}}
                          required
                      />
                      <TextField
                          type='email'
                          name='email'
                          label='Email'
                          variant="filled"
                          sx={{mb: '1rem'}}
                          required
                      />
                      <TextField
                          label="Password"
                          type="password"
                          autoComplete="current-password"
                          variant="filled"
                          sx={{mb: '1rem'}}
                          required
                      />
                      <TextField
                          type='password'
                          label='Confirm Password'
                          name='passwordConfirm'
                          variant="filled"
                          required
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
                      >
                        Sign Up
                      </LoadingButton>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container justifyContent='center'>
                  <Stack sx={{ mt: '3rem', textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '0.9rem', mb: '1rem' }}>
                      Already have an account? <LinkItem to='/Dispatch/login'>Login</LinkItem>
                    </Typography>
                  </Stack>
                </Grid>
              </FormProvider>
            </Grid>
          </Grid>
        </Grid>
      </Container>
  );
}

export default SignUpForm;
