import { User } from '../database/models/user.model.js';

export const findAllUsers = async () => {
  return await User.findAll({ attributes: { exclude: ['hash'] } });
};
export const findUserById = async (id) => {
  return await User.findOne({
    where: { id },
    attributes: { exclude: ['hash'] },
  });
};
export const findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};
export const createUser = async (name, email, hash, user_type) => {
  return await User.create({ name, email, hash, user_type });
};
export const updateUserData = async (id, name, hash, user_type) => {
  return await User.update({ name, hash, user_type }, { where: { id } });
};
export const deleteUserData = async (id) => {
  return await User.destroy({ where: { id } });
};
