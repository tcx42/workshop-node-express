import { Sequelize } from 'sequelize';
import { config } from '../config.js';

const db = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
  dialect: 'mysql',
  host: config.DB_HOST,
  port: config.DB_PORT,
});

(async () => {
  try {
    await db.authenticate();
    console.log('Database Connected');
  } catch (error) {
    console.error(error);
  }
})();

export default db;
