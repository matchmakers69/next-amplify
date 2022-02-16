import { FC, InputHTMLAttributes } from 'react';
import { InputUnstyled } from '@mui/base';
import classNames from 'classnames';

export type InputSize = 'normal' | 'large';
export type InputType = 'text' | 'email' | 'password';

export type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: InputType;
  size?: InputSize;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'onChange'>;

// InputHTMLAttributes<HTMLInputElement> - wszystkie natywne propsy dla inputa,
// Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> - omijam natywne atrybuty, ktore sa podawane jako unia

const sizeMap: { [key in InputSize]: string } = {
  normal: 'normal-size',
  large: 'large-size',
};
const Input: FC<InputProps> = ({
  id,
  name,
  label,
  type = 'text',
  size = 'normal',
  className = '',
  placeholder,
  // onChange,
  ...props
}) => {
  return (
    <InputUnstyled
      id={id}
      name={name}
      type={type}
      aria-label={label}
      placeholder={placeholder}
      className={classNames(['input-field', sizeMap[size], className])}
      {...props}
    />
  );
};
export default Input;
