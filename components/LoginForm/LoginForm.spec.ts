import { describe, expect, it } from 'vitest';
import { authSchema } from './LoginForm';

describe('Validation Schema', () => {
  it('Schema should require a password', () => {
    expect(() =>
      authSchema.parse({
        email: '',
      })
    ).toThrow();
  });
});
