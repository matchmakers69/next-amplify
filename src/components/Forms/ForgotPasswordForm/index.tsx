import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Grid, TextField } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { forgotPasswordSchema } from 'src/lib/validation/forgotPasswordSchema';
import { ButtonSubmit } from 'src/styles/muiButtons';
import { Auth } from 'aws-amplify';

export type ForgotPasswordInputType = Pick<
  Yup.InferType<typeof forgotPasswordSchema>,
  'email' | 'password' | 'authCode'
>;

const ForgotPasswordForm = () => {
  const [open, setOpen] = useState(false);
  const [forgotPasswordError, setForgotPasswordError] = useState<string>('');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ForgotPasswordInputType>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const handleForgotPasswordSubmit = async (data: ForgotPasswordInputType) => {
    try {
      await Auth.forgotPasswordSubmit(data.email, data.authCode, data.password);
    } catch (err: any) {
      console.error(err);
      setForgotPasswordError(err.message);
      setOpen(true);
    }
  };

  // Close error message
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    event?.preventDefault();
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleForgotPasswordSubmit)} noValidate>
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
            <TextField
              error={errors?.authCode ? true : false}
              helperText={errors?.authCode ? errors.authCode?.message : null}
              variant="outlined"
              id="authCode"
              label="Verification authCode"
              type="text"
              {...register('authCode')}
            />
          </Grid>
          <Grid item>
            <ButtonSubmit type="submit">Reset password</ButtonSubmit>
          </Grid>
        </Grid>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {forgotPasswordError}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ForgotPasswordForm;
