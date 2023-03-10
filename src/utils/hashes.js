import { pbkdf2Sync, randomBytes } from 'node:crypto';
export const hashPassword = (password) => {
  const salt = randomBytes(16).toString('hex');
  const hash = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
};
export const isPasswordValid = (password, dbHash) => {
  const [salt, hash] = dbHash.split(':');
  return (
    hash === pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
  );
};
