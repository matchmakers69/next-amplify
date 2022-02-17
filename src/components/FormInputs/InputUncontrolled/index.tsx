/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeepMap, FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import Input, { InputProps } from '../Input';
import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import _get from 'lodash/get';

export type IInputUncontrolledProps<TFormValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & Omit<InputProps, 'name'>;

const InputUncontrolled = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors,
  className,
  ...props
}: IInputUncontrolledProps<TFormValues>): JSX.Element => {
  const errorMessages = _get(errors, name);
  const hasError = !!(errors && errorMessages);
  return (
    <>
      <Input
        name={name}
        aria-invalid={hasError}
        className={classNames({
          'transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600':
            hasError,
        })}
        {...props}
        {...(register && register(name, rules))}
      />

      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => <div>{message}</div>}
      />
    </>
  );
};

export default InputUncontrolled;
