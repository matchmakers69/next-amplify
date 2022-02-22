import { Alert, Grid } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from 'src/context/AuthContext';
import { ButtonSubmit } from 'src/styles/muiButtons';
import { FormLoginKeys } from 'src/pages/login';
import InputUncontrolled from 'src/components/FormInputs/InputUncontrolled';
import SocialLogIn from 'src/components/SocialLogIn';

type ILoginFormProps = {
  toggleLoginComponent: (key: FormLoginKeys) => void;
};

export type ILoginFormInput = {
  email: string;
  password: string;
};

export const emailPattern = {
  value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  message: 'Enter a valid email address.',
};

export default function LoginForm({ toggleLoginComponent }: ILoginFormProps) {
  const { login } = useUser();
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

  const handleLoginSubmit: SubmitHandler<ILoginFormInput> = async (loginUserData) => {
    try {
      await login(loginUserData);
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
            <InputUncontrolled<ILoginFormInput>
              placeholder="email"
              id="email"
              label="Email"
              name="email"
              type="email"
              register={register}
              rules={{
                required: 'You must enter your email address.',
                pattern: emailPattern,
              }}
              errors={errors}
            />
          </Grid>

          <Grid item>
            <InputUncontrolled<ILoginFormInput>
              placeholder="password"
              id="password"
              label="Password"
              type="password"
              name="password"
              register={register}
              errors={errors}
              rules={{
                required: 'Password is required',
              }}
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
          <Grid item>
            <SocialLogIn />
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
}
