export const errorMessage = {
  signUpFormError: {
    username: {
      required: 'Username is required',
    },
    email: {
      required: 'Email is required',
      pattern: 'Invalid field, make sure your email is at least five characters long',
      spaces_error: 'Email must not use spaces',
    },
    password: {
      required: 'Field required',
      pattern:
        'Password must contain at least 6 characters, one uppercase, one number and one special case character',
    },
    code: {
      required: 'Field required',
      pattern: 'Code must contain at least 6 characters',
    },
  },
};
