import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Avatar } from './Avatar';

describe('Avatar Component', () => {
  it("Should display the initials of the User's name", () => {
    render(<Avatar name="Example User" />);
    expect(screen.getByText('EU')).toBeTruthy();
  });
});
