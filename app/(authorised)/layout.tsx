import { Header } from '@/components';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import styles from './authorised.module.css';

export const metadata: Metadata = {
  title: 'Welcome',
  description: 'We do auth things!',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  );
}
