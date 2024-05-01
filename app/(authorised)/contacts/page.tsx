import { ContactsTable } from '@/components';
import { Contact } from '@/utils';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import styles from './contacts.module.css';

export const metadata: Metadata = {
  title: 'Contacts',
  description: 'Here are your contacts',
};

const Component = async () => {
  const items: Contact[] = await fetch(process.env.URL + '/api/contacts').then(
    (r) => r.json()
  );
  return <ContactsTable items={items} />;
};

export default function Contacts() {
  return (
    <main className={styles.wrapper}>
      <Suspense>
        <Component />
      </Suspense>
    </main>
  );
}
