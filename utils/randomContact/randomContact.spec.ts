import { describe, expect, it } from 'vitest';
import { randomContact } from './randomContact';

describe('randomContact', () => {
  it('should return a contact object with a name, email, and phoneNumber', () => {
    const contact = randomContact();

    expect(contact).toHaveProperty('name');
    expect(contact).toHaveProperty('email');
    expect(contact).toHaveProperty('phoneNumber');
  });

  it('should generate a random first and last name', () => {
    const contact1 = randomContact();
    const contact2 = randomContact();
    expect(contact1.name.split(' ')).toHaveLength(2);
    expect(contact1.name === contact2.name).toBe(false);
  });

  it("should generate a valid email address that matches the user's name", () => {
    const contact = randomContact();

    expect(contact.email).toMatch(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
    expect(contact.email).toContain(contact.name.replace(' ', '.'));
  });

  it('should generate a 12 digit random phone number starting with +61', () => {
    const contact1 = randomContact();
    const contact2 = randomContact();
    expect(contact1.phoneNumber.length).toBe(12);
    expect(contact1.phoneNumber.length).toBe(12);
    expect(contact2.phoneNumber).toMatch(/^\+61/);
    expect(contact1.phoneNumber === contact2.phoneNumber).toBe(false);
  });
});
