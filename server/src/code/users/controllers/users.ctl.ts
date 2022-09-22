import { Request, Response } from "express";
import Users from "../models/user.models";
import Tasks from "../../tasks/models/tasks.models";
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";
import uploadImages from "../../../services/upload.image";
import fs from "fs-extra";

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
  if (password === repeate_new_password) {
    res.json({
      message: "your new password cannot be your current password",
    });
    return;
  }
  const passwdHashed = await bcrypt.hash(new_password, 10);
  user.password = passwdHashed;
  await user?.save();
  res.json({ message: "Your password was updated successfully" });
};

export const deleteUser = async (req: Request | any, res: Response) => {
  const id_user = req.id;
  const { password } = req.body;
  try {
    const user: any = await Users.findOne({ where: { id_user } });
    const passwordMatched: boolean = await bcrypt.compare(
      password,
      user.password
    );
    if (!passwordMatched) {
      res.json({
        removed: false,
        message: "your password is not correct, you cannot delete your account",
      });
      return;
    }
    if (user.cloud_id.length > 0) {
      await cloudinary.uploader.destroy(user.cloud_id);
    }
    await Tasks.destroy({ where: { author: id_user } });
    await Users.destroy({ where: { id_user } });
    res.json({ message: "the user was deleted", removed: true });
  } catch (err) {
    res.send(err);
  }
};

export const editAvatar = async (req: Request | any, res: Response) => {
  const id_user = req.id;
  const { img_id, img_url, response } = await uploadImages(req.file);

  if (!response) {
    res.json({
      message: "There was an error uploading your avatar, please try later",
    });
    req.file ? await fs.remove(req.file.path) : null;
    return;
  }
  try {
    const user: any = await Users.findOne({ where: { id_user } });
    if (user.avatar.length > 0) {
      await cloudinary.uploader.destroy(user.cloud_id);
    }
    user.avatar = img_url;
    user.cloud_id = img_id;
    await user.save();
    res.json({ message: "your avatar was uploaded successfully" });
  } catch (err) {
    res.send(err);
  }
  req.file ? await fs.remove(req.file.path) : null;
};
