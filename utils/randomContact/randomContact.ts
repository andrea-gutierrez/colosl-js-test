export interface Contact {
  name: string;
  email: string;
  phoneNumber: string;
}

export const randomContact = (): Contact => {
  const name = 'Random Contact';
  return {
    name,
    email: 'example@example.com',
    phoneNumber: `${Math.random() * 100000}`,
  };
};
