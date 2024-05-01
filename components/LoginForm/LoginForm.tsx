'use client';

import { Card } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { FC, ReactNode } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';
import styles from './login-form.module.css';

interface LoginFormProps {
  children?: ReactNode;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export const authSchema = z.object({
  email: z.string(),
  password: z.string().min(1, {
    message: 'Please enter password',
  }),
});

export const LoginForm: FC<LoginFormProps> = ({ children }) => {
  const { handleSubmit, register } = useForm<LoginFormData>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (body) => {
    try {
      await signIn('credentials', {
        callbackUrl: '/contacts',
        ...body,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className={styles.card}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {children}
        <input type="email" {...register('email')} placeholder="Email" />
        <input
          type="password"
          {...register('password')}
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </Card>
  );
};
