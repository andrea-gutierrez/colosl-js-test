'use client';

import { SessionProvider, SessionProviderProps } from 'next-auth/react';
import { FC, ReactNode } from 'react';

export type Session = SessionProviderProps['session'];

interface AuthProviderProps {
  children: ReactNode;
  session: Session;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children, session }) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);
