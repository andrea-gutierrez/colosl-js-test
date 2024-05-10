import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ContactsTable, ContactsTableProps } from './ContactsTable';
import '@testing-library/jest-dom/vitest';

describe('ContactsTable', () => {
  const mockItems: ContactsTableProps['items'] = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890'
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phoneNumber: '9876543210'
    }
  ];

  it('renders table with correct data', () => {
    render(<ContactsTable items={mockItems} />);

    const table = screen.getByRole('table');
    const tableRows = screen.getAllByRole('row');

    expect(table).toBeTruthy();
    expect(tableRows).toHaveLength(mockItems.length + 1); // +1 for table header row

    mockItems.forEach((item, index) => {
      const row = tableRows[index + 1]; // +1 to skip table header row

      expect(screen.getByText(item.name)).toBeTruthy();
      expect(screen.getByText(item.email)).toBeTruthy();
      expect(screen.getByText(item.phoneNumber)).toBeTruthy();
    });
  });

  it('adds a new contact when "Add Contact" button is clicked', () => {
    render(<ContactsTable items={mockItems} />);

    const addButton = screen.getByRole('button', { name: 'Add Contact' });

    fireEvent.click(addButton);

    const tableRows = screen.getAllByRole('row');

    expect(tableRows).toHaveLength(mockItems.length + 2);
  });

  it('removes all contacts when "Remove" button is clicked', () => {
    render(<ContactsTable items={mockItems} />);

    let tableRows = screen.getAllByRole('row');
    const removeButton = within(tableRows[tableRows.length - 1]).getByRole(
      'button'
    );

    fireEvent.click(removeButton);

    tableRows = screen.getAllByRole('row');

    expect(tableRows).toHaveLength(mockItems.length);
  });

  it('should remove only the element that was clicked when hit "Remove" button', async () => {
    render(<ContactsTable items={mockItems} />);

    let tableRows = screen.getAllByRole('row');
    const removeButton = within(tableRows[1]).getByRole(
      'button'
    );

    fireEvent.click(removeButton);

    const row = screen.queryByText(mockItems[0].email);
    expect(row).not.toBeInTheDocument();
  });
});
