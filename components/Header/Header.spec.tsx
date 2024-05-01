import { render, screen } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { Header } from './Header';

beforeAll(() => {
  vi.mock('next/navigation', () => ({
    useRouter: vi.fn(() => ({
      push: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
      query: {},
      asPath: '',
      pathname: '/',
    })),
  }));
});

describe('Header Component', () => {
  it('Should display "login" button when the user is not logged in', () => {
    render(
      <SessionProvider session={null}>
        <Header />
      </SessionProvider>
    );
    expect(screen.getByText('Login')).toBeTruthy();
  });
});
