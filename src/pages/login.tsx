import { FC, useState } from 'react';
import LoginForm from 'src/components/Forms/LoginForm';
import EmailCheckForm from 'src/components/Forms/EmailCheckForm';

const formLoginMapping = {
  'login-form': LoginForm,
  'forgot-password-form': EmailCheckForm,
} as const;

export type FormLoginKeys = keyof typeof formLoginMapping;

function Login() {
  const [formKey, setFormKey] = useState<FormLoginKeys>('login-form');
  const ComponentForm = formLoginMapping[formKey];

  const toggleLoginComponent = (key: FormLoginKeys) => {
    setFormKey(key);
  };
  return (
    <>
      <ComponentForm toggleLoginComponent={toggleLoginComponent} />
    </>
  );
}

export default Login;
