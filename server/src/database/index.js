import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
 
// Create the connection pool. The pool-specific settings are the defaults

// const connectionString = process.env.DATABASE_URL;
const connectionData = {
  host: 'remotemysql.com',
  user: 'OfxeZtzw45',
  database: 'OfxeZtzw45',
  password: 'ZWrOLsGx7o',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

const pool = mysql.createPool(connectionData).promise();
// const promisePool = pool.promise()

// {
//   host: 'localhost',
//   user: 'root',
//   database: 'test',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// }


export default pool;