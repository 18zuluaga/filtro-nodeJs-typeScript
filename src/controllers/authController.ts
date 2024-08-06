import { container } from "tsyringe";
import { Request, Response } from "express";
import {UserService} from "../services/userService";
import jwt from "jsonwebtoken";
import { User } from "../models";
import { CartService } from "../services/cartService";

export class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const userService = container.resolve(UserService);
      const user: User = await userService.checkUserCredentials(
        email,
        password
      );
      const token = AuthController.generateToken({
        id: user.id,
        username: user.email,
        roleId: user.roleId
      });
      res.status(200).json({ status: 200, token });
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }

  static async register(req: Request, res: Response) {
    try {
      const { email, password, roleId } = req.body;
      if (!email || !password || !roleId) {
        res.status(400).json({ message: "Email, password and roleId are required" });
      }
      const userService = container.resolve(UserService);
      const user = await userService.createUser(req.body);
      if(user.roleId !== 2){
        const cartService = container.resolve(CartService);
        await cartService.createCart(user.id);
      }
      res.status(201).json({ status: 201, message: "User created successfully", data: user });
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }

  static generateToken = (user: { id: number; username: string; roleId: number }) => {
    const token = jwt.sign(user, "secret", { expiresIn: "1h" });
    return token;
  };
}
