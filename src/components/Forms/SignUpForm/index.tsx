import { Alert, Grid, TextField } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import React, { useState } from 'react';
import { errorMessage } from 'src/utils/errors/formErrors';
import { useForm, SubmitHandler } from 'react-hook-form';
import { emailRegExp, passwordRegex } from 'src/lib/validation/regex';
import { Auth } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';
import { ButtonSubmit } from 'src/styles/muiButtons';
import { useRouter } from 'next/router';
import constants from 'src/constants';
const { LOGIN } = constants.routes;
const { signUpFormError } = errorMessage;

interface ISignUpFormInput {
  username: string;
  email: string;
  password: string;
  code: string;
}

const SignUpForm = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [signUpError, setSignUpError] = useState<string>('');
  const [showCode, setShowCode] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignUpFormInput>();

  // Close error message
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    event?.preventDefault();
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSignUpSubmit: SubmitHandler<ISignUpFormInput> = async (data) => {
    try {
      if (showCode) {
        await confirmSignUp(data);
      } else {
        await signUpWithEmailAndPassword(data);
        setShowCode(true);
      }
    } catch (err: any) {
      console.log(err);
      setSignUpError(err.message);
      setOpen(true);
    }
  };

  // Amplify confirm signup
  async function confirmSignUp(data: ISignUpFormInput) {
    const { password, code, email } = data;
    try {
      // username needs to be an email;
      await Auth.confirmSignUp(email, code);
      const amplifyUser = await Auth.signIn({
        username: email,
        password,
      });
      if (amplifyUser) {
        router.push(LOGIN);
      } else {
        throw new Error('Something went wrong ;(');
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Amplify signup
  async function signUpWithEmailAndPassword(data: ISignUpFormInput): Promise<CognitoUser> {
    const { password, email } = data;
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
        },
      });
      return user;
    } catch (error) {
      throw new Error('Something went wrong ;(');
    }
  }

  return (
    <>
      <form noValidate onSubmit={handleSubmit(handleSignUpSubmit)}>
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
          <Grid item>
            <TextField
              error={errors?.username ? true : false}
              helperText={errors?.username ? errors.username?.message : null}
              variant="outlined"
              id="username"
              label="Username"
              type="text"
              {...register('username', {
                required: signUpFormError.username.required,
                minLength: {
                  value: 3,
                  message: 'Please enter a username between 3-16 characters',
                },
                maxLength: {
                  value: 16,
                  message: 'Please enter a username between 3-16 characters',
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'No space no letters',
                },
              })}
            />
          </Grid>

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
          {showCode && (
            <Grid item>
              <TextField
                error={errors?.code ? true : false}
                helperText={errors?.code ? errors.code?.message : null}
                variant="outlined"
                id="code"
                label="Verification code"
                type="text"
                {...register('code', {
                  required: signUpFormError.code.required,
                  minLength: {
                    value: 6,
                    message: 'Your verification code is 6',
                  },
                  maxLength: {
                    value: 6,
                    message: 'Your verification code is 6',
                  },
                })}
              />
            </Grid>
          )}

          <Grid item>
            <ButtonSubmit type="submit">{showCode ? 'Confirm code' : '  Sign up'}</ButtonSubmit>
          </Grid>
        </Grid>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {signUpError}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignUpForm;
