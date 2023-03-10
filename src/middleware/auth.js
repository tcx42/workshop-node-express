import jwt from 'jsonwebtoken';
import { config } from '../config.js';

export const authenticateUser = (req, res, next) => {
  try {
    const { id } = req.params;
    const { token } = req.headers;
    const user = jwt.verify(token, config.SECRET);
    if (user.user_type === 'operador' && user.id !== id) {
      return res.status(401).send();
    }
    next();
  } catch (error) {
    return res.status(401).send();
  }
};

export const authenticateAdmin = (req, res, next) => {
  try {
    const { token } = req.headers;
    const user = jwt.verify(token, config.SECRET);
    if (user.user_type !== 'admin') throw new Error('User Unathorized');
    next();
  } catch (error) {
    return res.status(401).send();
  }
};
