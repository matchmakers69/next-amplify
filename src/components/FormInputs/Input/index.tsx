import { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
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
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'>;

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
  ...props
}) => {
  return (
    <input
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
