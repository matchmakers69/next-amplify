import { Alert, Grid, TextField } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import React, { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import constants from 'src/constants';
import { ButtonSubmit } from 'src/styles/muiButtons';
import { FormLoginKeys } from 'src/pages/login';
const { HOME } = constants.routes;

type ILoginFormProps = {
  toggleLoginComponent: (key: FormLoginKeys) => void;
};

interface ILoginFormInput {
  email: string;
  password: string;
}

const LoginForm: FC<ILoginFormProps> = ({ toggleLoginComponent }) => {
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
              {...register('email')}
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
              {...register('password')}
            />
          </Grid>

          <Grid item>
            <ButtonSubmit type="submit">Login</ButtonSubmit>
          </Grid>
          <Grid item>
            <button type="button" onClick={() => toggleLoginComponent('forgot-password-form')}>
              Forgot password
            </button>
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

export default LoginForm;