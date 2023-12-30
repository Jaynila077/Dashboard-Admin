import dotenv from 'dotenv';
dotenv.config({ path: '../config.env' });

export default {
  host: process.env.host || 'localhost',
  user: process.env.user || 'postgres',
  password: process.env.password|| 'jaynila077',
  database: process.env.database || 'dashboard',
  dialect: process.env.dialect || 'postgres',
  port: process.env.port || 5432,
};
