import { FC, useState } from 'react';
import { Alert, Grid, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import Snackbar from '@mui/material/Snackbar';
import { FormLoginKeys } from 'src/pages/login';
import { ButtonSubmit } from 'src/styles/muiButtons';

type IForgotPasswordFormProps = {
  toggleLoginComponent: (key: FormLoginKeys) => void;
};

interface IForgotPasswordInput {
  email: string;
  password: string;
}

const ForgotPasswordForm: FC<IForgotPasswordFormProps> = ({ toggleLoginComponent }) => {
  const [open, setOpen] = useState(false);
  // Login error
  const [forgotPasswordError, setForgotPasswordError] = useState<string>('');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForgotPasswordInput>();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    event?.preventDefault();
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleForgotPasswordSubmit: SubmitHandler<IForgotPasswordInput> = async (data) => {
    try {
      console.log(data);
    } catch (error: any) {
      console.log(error);
      setForgotPasswordError(error.message);
      setOpen(true);
    }
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(handleForgotPasswordSubmit)}>
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
            <ButtonSubmit type="submit">Remind password</ButtonSubmit>
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

export default ForgotPasswordForm;
