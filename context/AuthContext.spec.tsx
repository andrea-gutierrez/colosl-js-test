import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AuthProvider } from './auth.context';

describe('AuthProvider', () => {
  it('renders children with session provider', () => {
    const session = { user: { name: 'John Doe' }, expires: '10000' };

    const { getByText } = render(
      <AuthProvider session={session}>
        <div>Hello, {session.user.name}!</div>
      </AuthProvider>
    );

    expect(getByText(`Hello, ${session.user.name}!`)).toBeTruthy();
  });
});
