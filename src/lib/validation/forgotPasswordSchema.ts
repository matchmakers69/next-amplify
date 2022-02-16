import * as yup from 'yup';
import { digitsRegex } from './regex';

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email address field is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Min 6 characters')
    .max(15, 'Max 15 characters'),
  authCode: yup
    .string()
    .required('Code is required')
    .matches(digitsRegex, 'Must be only digits')
    .min(6, 'Must be exactly 6 digits')
    .max(6, 'Must be exactly 6 digits'),
});
