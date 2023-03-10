import { DataTypes } from 'sequelize';
import db from '../db.js';

export const User = db.define(
  'Users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_type: {
      type: DataTypes.ENUM,
      values: ['operador', 'admin'],
      allowNull: false,
    },
  },
  {
    tableName: 'users',
  }
);
