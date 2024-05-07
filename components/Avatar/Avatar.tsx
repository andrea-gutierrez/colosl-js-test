import { FC } from 'react';
import styles from './avatar.module.css';

interface AvatarProps {
  name?: string | null;
}

const getInitialsName = (name?: string | null): string => {
  if(!name) return '';

  const [firstName, middleName] = name.split(' ');
  return `${firstName.at(0)}${middleName.at(0)}` ?? '';
}

export const Avatar: FC<AvatarProps> = ({ name }) => (
  <div className={styles.avatar}>{getInitialsName(name)}</div>
);
