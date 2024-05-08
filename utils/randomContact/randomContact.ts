import { faker } from '@faker-js/faker';

export interface Contact {
  name: string;
  email: string;
  phoneNumber: string;
}

export const randomContact = (): Contact => {
  const name = getName();
  const auCountryCode = '+61';
  const phoneNumber = `${auCountryCode}${faker.string.numeric({length: 9})}`;

  return {
    name,
    email: getEmail(name),
    phoneNumber: phoneNumber,
  };
};

const getEmail = (name: string): string => {
  return `${name.split(' ').join('.')}@example.com`
};

const getName = (): string => {
  return `${faker.person.firstName()} ${faker.person.lastName()}`;
}
