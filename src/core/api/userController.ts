import express from "express";
import RequestUserDTO from "../mapper/request/requestUserDTO";
import UserService from "../services/impl/userService";

const router = express.Router();

router.post("/add-user", async (req, res) => {
   const { name, email } = req.body;
   const newUser = new RequestUserDTO(name, email);
   const userService = new UserService();
   userService.addUser(newUser);
   res.status(201).json({ message: "User added", user: { name, email } });
});
