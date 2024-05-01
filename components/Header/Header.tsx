'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import styles from './header.module.css';

export const Header: FC = () => {
  const router = useRouter();
  const { data, status } = useSession();
  const onLogout = () =>
    signOut({
      callbackUrl: '/login',
    });

  const login = () => router.push('/login');

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        A
      </a>
      {status === 'unauthenticated' ? (
        <Button size="sm" outline onClick={login}>
          Login
        </Button>
      ) : (
        <>
          <Button size="sm" outline onClick={onLogout}>
            Logout
          </Button>
          <Avatar name={data?.user?.name} />
        </>
      )}
    </header>
  );
};
