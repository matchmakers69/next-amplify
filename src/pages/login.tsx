import { FC, useState } from 'react';
import LoginForm from 'src/components/Forms/LoginForm';
import ForgotPasswordForm from 'src/components/Forms/ForgotPasswordForm';

const formLoginMapping = {
  'login-form': LoginForm,
  'forgot-password-form': ForgotPasswordForm,
} as const;

export type FormLoginKeys = keyof typeof formLoginMapping;

const Login: FC = () => {
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
};

export default Login;
