import React from 'react';
import ForgotPasswordForm from 'src/components/Forms/ForgotPasswordForm';
import Meta from 'src/components/Meta';
import { H1 } from 'src/styles/typography';

const ForgotPassword = () => {
  return (
    <>
      <Meta
        schemaType="Welcome profile page"
        title="The profile page"
        description="Profile's description will be added shortly"
      />
      <div data-testid="page-wrapper">
        <H1>Forgot password</H1>
        <ForgotPasswordForm />
      </div>
    </>
  );
};

export default ForgotPassword;
