import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card } from './Card';

describe('Card component', () => {
  it('renders children correctly', () => {
    render(<Card>Test Content</Card>);
    const cardElement = screen.getByText('Test Content');
    expect(cardElement).toBeTruthy();
  });
});
