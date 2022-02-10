import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { errorMessage } from 'src/utils/errors/formErrors';
import { useForm, SubmitHandler } from 'react-hook-form';
import { emailRegExp, PASSWORD_PATTERN } from 'src/lib/validation/regex';

const { signUpFormError } = errorMessage;

interface ISignUpFormInput {
  username: string;
  email: string;
  password: string;
}

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignUpFormInput>();
  const handleSignUpSubmit: SubmitHandler<ISignUpFormInput> = (data) => {
    console.log(data);
  };
  return (
    <>
      <form noValidate onSubmit={handleSubmit(handleSignUpSubmit)}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
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
                  value: PASSWORD_PATTERN,
                  message: signUpFormError.password.pattern,
                },
              })}
            />
          </Grid>

          <Grid item>
            <Button type="submit" variant="contained">
              Sign up
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Signup;
