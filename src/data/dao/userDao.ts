import pool from "../../config/dbConnect";
import User from "../model/user";
import type { ResultSetHeader } from "mysql2";

class UserDao {
   public async addUser(user: User): Promise<any> {
      try {
         const [result] = await pool.execute<ResultSetHeader>(
            "INSERT INTO users (name, email) VALUES (?, ?)",
            [user.getName(), user.getEmail()]
         );
         console.log("User saved with ID:", result.insertId);
         return result.insertId;
      } catch (error) {
         console.error("Error saving user:", error);
         return null;
      }
   }
}

export default UserDao;
