import cn from 'classnames';
import { ReactNode } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  outline?: boolean;
  size?: 'sm' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = '',
  outline,
  ...rest
}) => (
  <button
    {...rest}
    className={cn(size && styles[size], {
      'outline': outline,
      [size]: size !== undefined
    })}
  >
    {children}
  </button>
);
