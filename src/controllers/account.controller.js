import {
  createUser,
  findUserByEmail,
} from '../repositories/users.repository.js';
import jwt from 'jsonwebtoken';
import { hashPassword, isPasswordValid } from '../utils/hashes.js';
import { config } from '../config.js';

export const signIn = async (req, res, next) => {
  try {
    const { name, email, password, user_type } = req.body;
    const hash = hashPassword(password);
    const user = await createUser(name, email, hash, user_type);
    return res.status(201).send();
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user) return res.status(404).json({ message: 'NOT FOUND' });
    if (!isPasswordValid(password, user.hash)) {
      return res.status(401).json({ message: 'invalid password' });
    }
    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        user_type: user.user_type,
      },
      config.SECRET,
      { expiresIn: '1h' }
    );
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
