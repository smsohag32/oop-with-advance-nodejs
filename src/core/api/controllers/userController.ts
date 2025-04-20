import express, { Request, Response, NextFunction } from "express";
import RequestUserDTO from "../../dto/request/requestUserDTO";
import UserService from "../../services/interfaces/userService";
import UserServiceImpl from "../../services/impl/userServiceImpl";

export const userService: UserService = new UserServiceImpl();
const userRoute = express.Router();

userRoute.post("/add-user", async (req: Request, res: Response, next: NextFunction) => {
   try {
      const { name, email } = req.body;
      
      const userDTO = new RequestUserDTO(name, email);

      const result = await userService.addUser(userDTO);

      res.status(201).json({ message: "User added", userId: result });
   } catch (error) {
      next(error);
   }
});

export default userRoute;
