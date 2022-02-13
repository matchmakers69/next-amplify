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

const Input: FC<InputProps> = ({ id, name, label, type = 'text', size = 'medium', className = '', placeholder, ...props }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      aria-label={label}
      placeholder={placeholder}
      className={classNames([
        'relative inline-flex w-full rounded leading-none transition-colors ease-in-out placeholder-gray-500 text-gray-700 bg-gray-50 border border-gray-300 hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-4 focus:ring-opacity-30',
        // sizeMap[size],
        className,
      ])}
      {...props}
    />
  );
};
export default Input;