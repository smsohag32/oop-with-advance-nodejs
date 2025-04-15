import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0,
});

export default pool;


export const connectToDatabase = async () => {
   try {
      await pool.getConnection();
      console.log("Connected to the database successfully.");
   } catch (error) {
      console.error("Error connecting to the database:", error);
   }
};

export const closeDatabaseConnection = async () => {
   try {
      await pool.end();
      console.log("Database connection closed.");
   } catch (error) {
      console.error("Error closing the database connection:", error);
   }
};
