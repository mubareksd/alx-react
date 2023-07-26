import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

test('footer copy', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('current full year', () => {
  expect(getFullYear()).toBe(2023);
});

test('latest notification', () => {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});
