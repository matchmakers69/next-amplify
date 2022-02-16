import { FC, useState } from 'react';
import { Alert, Grid, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import Snackbar from '@mui/material/Snackbar';
import { FormLoginKeys } from 'src/pages/login';
import { ButtonSubmit } from 'src/styles/muiButtons';
import { useRouter } from 'next/router';
import constants from 'src/constants';
import { Auth } from 'aws-amplify';

const { FORGOT_PASSWORD } = constants.routes;

type IEmailCheckFormProps = {
  toggleLoginComponent: (key: FormLoginKeys) => void;
};

interface IEmailCheckFormPropsInput {
  email: string;
}

const EmailCheckForm: FC<IEmailCheckFormProps> = ({ toggleLoginComponent }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  // Login error
  const [forgotPasswordError, setForgotPasswordError] = useState<string>('');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IEmailCheckFormPropsInput>();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    event?.preventDefault();
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleEmailCheckSubmit: SubmitHandler<IEmailCheckFormPropsInput> = async (data) => {
    try {
      const response = await Auth.forgotPassword(data.email);
      if (response) {
        router.push(FORGOT_PASSWORD);
      }
    } catch (error: any) {
      console.log(error);
      setForgotPasswordError(error.message);
      setOpen(true);
    }
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(handleEmailCheckSubmit)}>
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
            <ButtonSubmit type="submit">Get code to reset password</ButtonSubmit>
          </Grid>
          <Grid item>
            <button type="button" onClick={() => toggleLoginComponent('login-form')}>
              Back
            </button>
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

export default EmailCheckForm;
