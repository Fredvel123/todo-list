import { Request, Response } from "express";
import Users from "../models/user.models";
import bcrypt from "bcryptjs";

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

export const getUserById = async (req: any, res: Response) => {
  try {
    const user = await Users.findOne({
      where: { id_user: req.id },
      attributes: {
        exclude: ["password", "email_confirmed", "email_key", "cloud_id"],
      },
    });
    res.json(user);
  } catch (err) {
    res.json(err);
  }
};

// interface UserInterface {
//   id_user: number;
//   full_name: string;
//   email: string;
//   password: string;
//   email_confirmed: boolean;
//   avatar: string;
//   cloud_id: string;
//   email_key: string;
//   create_at: string;
// }

// edit password
export const editPassword = async (req: any, res: Response) => {
  const { password, new_password, repeate_new_password } = req.body;
  const user: any = await Users.findOne({
    where: { id_user: req.id },
  });
  const passwordMatched = await bcrypt.compare(password, user.password);
  if (!passwordMatched) {
    res.json({ message: "your password is not correct" });
    return;
  }
  if (new_password !== repeate_new_password) {
    res.json({
      message:
        "your new password is not correct, please make sure you're adding the same password",
    });
    return;
  }
  const passwdHashed = await bcrypt.hash(new_password, 10);
  user.password = passwdHashed;
  await user?.save();
  res.json({ message: "Your password was updated successfully" });
};
