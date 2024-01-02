import express from "express";
import userController  from "../../controllers/users/index.js";
import loginController from "../../controllers/users/login/index.js";
import authenticateToken from "../../middleware/auth.js";

const User = express.Router();

User.get("/",userController.getAllUser);
User.get("/:id",authenticateToken, userController.getUserById);
User.post("/",userController.postUser);
User.put("/:id", authenticateToken,userController.putUser);
User.delete("/:id", authenticateToken,userController.removeUser);

User.post("/login", loginController.loginUser);

export default User;
