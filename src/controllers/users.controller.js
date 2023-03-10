import {
  deleteUserData,
  findAllUsers,
  findUserById,
  updateUserData,
} from '../repositories/users.repository.js';
import { hashPassword } from '../utils/hashes.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await findAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await findUserById(id);
    if (!user) return res.status(404).json({ message: 'NOT FOUND' });
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, password, user_type } = req.body;
    const hash = hashPassword(password);
    const user = await updateUserData(id, name, hash, user_type);
    return res.status(202).send();
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteUserData(id);
    return res.status(202).send();
  } catch (error) {
    next(error);
  }
};
