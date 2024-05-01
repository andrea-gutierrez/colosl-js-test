import cn from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './card.module.css';

interface CardProps {
  children?: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => (
  <div className={cn(className, styles.card)}>{children}</div>
);
