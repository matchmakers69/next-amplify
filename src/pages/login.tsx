import { Alert, Grid, TextField } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import React, { useState } from 'react';
import { errorMessage } from 'src/utils/errors/formErrors';
import { useForm, SubmitHandler } from 'react-hook-form';
import { emailRegExp, passwordRegex } from 'src/lib/validation/regex';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import constants from 'src/constants';
import { ButtonSubmit } from 'src/styles/muiButtons';
const { HOME } = constants.routes;

const { signUpFormError } = errorMessage;

interface ILoginFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  // AlertError state
  const [open, setOpen] = useState(false);
  // Login error
  const [loginError, setLoginError] = useState<string>('');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginFormInput>();

  // Close error message
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    event?.preventDefault();
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleLoginSubmit: SubmitHandler<ILoginFormInput> = async (data) => {
    try {
      const amplifyUser = await Auth.signIn(data.email, data.password);
      if (amplifyUser) {
        router.push(HOME);
      } else {
        throw new Error('Something went wrong ;(');
      }
    } catch (error: any) {
      console.log(error);
      setLoginError(error.message);
      setOpen(true);
    }
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(handleLoginSubmit)}>
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
          <Grid item>
            <TextField
              error={errors?.email ? true : false}
              helperText={errors?.email ? errors.email?.message : null}
              variant="outlined"
              id="email"
              label="Email"
              type="email"
              {...register('email', {
                required: signUpFormError.email.required,
                pattern: {
                  value: emailRegExp,
                  message: 'Email format is invalid',
                },
              })}
            />
          </Grid>

          <Grid item>
            <TextField
              error={errors?.password ? true : false}
              helperText={errors?.password ? errors.password?.message : null}
              variant="outlined"
              id="password"
              label="Password"
              type="password"
              {...register('password', {
                required: signUpFormError.password.required,
                pattern: {
                  value: passwordRegex,
                  message: signUpFormError.password.pattern,
                },
              })}
            />
          </Grid>

          <Grid item>
            <ButtonSubmit type="submit">Login</ButtonSubmit>
          </Grid>
        </Grid>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {loginError}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Login;
