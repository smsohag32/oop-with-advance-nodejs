import express from "express";
import RequestUserDTO from "../dto/request/requestUserDTO";
import UserService from "../services/interfaces/userService";
import UserServiceImpl from "../services/impl/userServiceImpl";

export const userService : UserService = new UserServiceImpl();

const userRoute = express.Router();

userRoute.post("/add-user", async (req, res) => {
   const { name, email } = req.body;
   // new RequestUserDTO(name, email)
   userService.addUser(req.body);
   res.status(201).json({ message: "User added", user: { name, email } });
});

export default userRoute;
