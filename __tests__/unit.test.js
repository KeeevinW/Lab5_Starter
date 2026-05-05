// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('(123) 456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('123-456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('hello is not a valid phone number', () => {
  expect(isPhoneNumber('hello')).toBe(false);
});
test('12-34-56 is not a valid phone number', () => {
  expect(isPhoneNumber('12-34-56')).toBe(false);
});

// isEmail
test('test@example.com is a valid email', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('hello@world.io is a valid email', () => {
  expect(isEmail('hello@world.io')).toBe(true);
});
test('not-an-email is not a valid email', () => {
  expect(isEmail('not-an-email')).toBe(false);
});
test('foo@bar is not a valid email', () => {
  expect(isEmail('foo@bar')).toBe(false);
});

// isStrongPassword
test('Abcd is a strong password', () => {
  expect(isStrongPassword('Abcd')).toBe(true);
});
test('Hello_123 is a strong password', () => {
  expect(isStrongPassword('Hello_123')).toBe(true);
});
test('1abcd is not a strong password (starts with digit)', () => {
  expect(isStrongPassword('1abcd')).toBe(false);
});
test('ab is not a strong password (too short)', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

// isDate
test('12/25/2023 is a valid date', () => {
  expect(isDate('12/25/2023')).toBe(true);
});
test('1/1/2024 is a valid date', () => {
  expect(isDate('1/1/2024')).toBe(true);
});
test('2023-12-25 is not a valid date', () => {
  expect(isDate('2023-12-25')).toBe(false);
});
test('12/25/23 is not a valid date (year too short)', () => {
  expect(isDate('12/25/23')).toBe(false);
});

// isHexColor
test('#FFF is a valid hex color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('A1B2C3 is a valid hex color', () => {
  expect(isHexColor('A1B2C3')).toBe(true);
});
test('#GGG is not a valid hex color', () => {
  expect(isHexColor('#GGG')).toBe(false);
});
test('#12345 is not a valid hex color (wrong length)', () => {
  expect(isHexColor('#12345')).toBe(false);
});
