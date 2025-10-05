import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const config = {
   NAME: process.env.DB_NAME || 'stockalert',
   USER: process.env.DB_USER || 'root',
   PASSWORD: process.env.DB_PASSWORD || '',
   HOST: process.env.DB_HOST || 'localhost',
   PORT: parseInt(process.env.DB_PORT || '3307'),
   dialect: 'mysql',
   pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
   }
};

const getMySQLConnection = async () => {
   try {
      const connection = await mysql.createConnection({
         host: config.HOST,
         user: config.USER,
         password: config.PASSWORD,
         database: config.NAME,
         port: config.PORT
      });
      return connection;
   } catch (error) {
      console.error('MySQL connection error:', error);
      throw error;
   }
};

export default getMySQLConnection;
export { config };

