'use client';

import { Avatar, Button } from '@/components';
import { Contact, randomContact } from '@/utils';
import { FC, useState } from 'react';
import styles from './contacts-table.module.css';

export interface ContactsTableProps {
  items: Contact[];
}

export const ContactsTable: FC<ContactsTableProps> = ({ items }) => {
  const [localItems, setLocalItems] = useState(items);

  const addItem = () => {
    setLocalItems([...localItems, randomContact()]);
  };

  const removeItem = () => setLocalItems([]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Button size="sm" onClick={addItem}>
            Add Contact
          </Button>
        </header>
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {localItems.map((item, i) => (
              <tr key={i}>
                <td>
                  <Avatar name={item.name} />
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>
                  <Button size="sm" outline onClick={removeItem}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
