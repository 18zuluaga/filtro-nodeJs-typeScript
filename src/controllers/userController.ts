import { Request, Response } from "express";
import { container } from "tsyringe";
import {UserService} from "../services/userService";

export class UserController {
  static async getAllUsers(_: Request, res: Response) {
    try{
      const userService = container.resolve(UserService);
      const users = await userService.getAllUsers();
      if (users.length === 0) {
        res.status(404).json({ message: "No users found"});
      }
      res.json(users);
    } catch(err){
      res.status(500).json({ message: err});
    }
  }

  static async createUser(req: Request, res: Response) {
      try{
        const userService = container.resolve(UserService);
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
      }catch(err){
        res.status(500).json({ message: err});
      }
  }

  static async updateUser(req: Request, res: Response) {
    try{
      const { id } = req.params;
      const { name, email, password } = req.body;
      if (!id || (!name && !email && !password)) {
        res.status(400).json({ message: "Id, name or email or password are required"});
      }
      const userService = container.resolve(UserService);
      const user = await userService.updateUser(req.body,parseInt(req.params.id));
      res.json(user);
    }catch(err){
      res.status(500).json({ message: err});
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try{
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "Id is required"});
      }
      const userService = container.resolve(UserService);
      const user = await userService.deleteUser(parseInt(req.params.id));
      res.json(user);
    }catch(err){
      res.status(500).json({ message: err});
    }
  }

}
