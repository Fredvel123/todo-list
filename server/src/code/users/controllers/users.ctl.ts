import { Request, Response } from "express";
import Users from "../models/user.models";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await Users.findAll();
    if (users.length < 1) {
      res.json({ message: "There is no users added yet" });
      return;
    }
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};
