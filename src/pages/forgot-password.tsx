import React from 'react';
import ForgotPasswordForm from 'src/components/Forms/ForgotPasswordForm';
import Meta from 'src/components/Meta';
import { Typography } from 'src/styles/typography';

function ForgotPassword() {
  return (
    <>
      <Meta
        schemaType="Welcome profile page"
        title="The profile page"
        description="Profile's description will be added shortly"
      />
      <div data-testid="page-wrapper">
        <Typography variant="h1" component="h1">
          Forgot password
        </Typography>
        <ForgotPasswordForm />
      </div>
    </>
  );
}

export default ForgotPassword;
