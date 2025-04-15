import { ApiError } from "../../exceptions/handelers/apiError";
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
      } catch (error: any) {
         if (error.code === "ER_DUP_ENTRY") {
            throw new ApiError(409, `Email already exists: ${user.getEmail()}`);
         }
         throw new ApiError(500, "Database error occurred");
      }
   }
}

export default UserDao;
