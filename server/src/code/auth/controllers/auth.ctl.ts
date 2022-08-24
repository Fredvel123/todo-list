import { Request, Response } from "express";
import Users from "../../users/models/user.models";
import bcrypt from "bcryptjs";
import fs from "fs-extra";
// my helpers and services
import randomString from "../helpers/random.string";
import emailvalidate from "../helpers/email.validte";
import passwordValidate from "../helpers/passwd.validate";
import uploadImages from "../../../services/upload.image";
import emailer from "../../../services/emailer";
import nameValidator from "../helpers/name.validate";

// Sign In
// once user was created - give a token
export const createNewUser = async (req: Request, res: Response) => {
  const { password, email, full_name } = req.body;
  const userExists = await Users.findOne({ where: { email } });
  if (userExists) {
    res.json({
      isCreated: false,
      statusCode: 409,
      message: `the email: ${email} is already used`,
    });
    req.file ? await fs.remove(req.file.path) : null;
    return;
  }
  const nameValidate = nameValidator(full_name);
  if (!nameValidate.response) {
    res.json({ isCreated: false, message: nameValidate.message });
    req.file ? await fs.remove(req.file.path) : null;
    return;
  }

  const emailValid = emailvalidate(email);
  if (!emailValid.response) {
    res.json({ isCreated: false, message: emailValid.message });
    req.file ? await fs.remove(req.file.path) : null;
    return;
  }
  const passwdValid = passwordValidate(password);
  if (!passwdValid.response) {
    res.json({ isCreated: false, message: passwdValid.message });
    req.file ? await fs.remove(req.file.path) : null;
    return;
  }
  const passwordHashed = await bcrypt.hash(password, 10);
  const html = `<h2>Welcome ${full_name} </h2> <p>hope you enjoy the app and use when you need it</p> <br /><h3>In case you never has visit our app, please ignore this email and do not click the link</h3><p>To confirm your email just</p><a href="www.google.com" target="__blank">click here</a>`;
  const emailSent = await emailer(email, "Welcome to TodoApp", html);
  if (!emailSent) {
    res.json({
      isCreated: false,
      message:
        "Something was wrong sending a message to your email, please check it out and enter a valid email",
    });
    req.file ? await fs.remove(req.file.path) : null;
    return;
  }
  if (!req.file) {
    try {
      await Users.create({
        full_name,
        email,
        password: passwordHashed,
        email_key: randomString(12),
        create_at: new Date(),
        avatar: "",
        cloud_id: "",
      });
      res.json({
        statusCode: 200,
        isCreated: true,
        message:
          "User was created successfully, please go and confirm your email",
      });
    } catch (err) {
      res.send(err);
    }
    return;
  }
  const image = await uploadImages(req.file);
  try {
    await Users.create({
      full_name,
      email,
      password: passwordHashed,
      email_key: randomString(12),
      create_at: new Date(),
      avatar: image.img_url,
      cloud_id: image.img_id,
    });
    res.json({
      statusCode: 200,
      isCreated: true,
      message: "User was created successfully",
    });
  } catch (err) {
    res.send(err);
  }
  req.file ? await fs.remove(req.file.path) : null;
};
