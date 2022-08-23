import { Request, Response } from "express";
import Users from "../../users/models/user.models";
import bcrypt from "bcryptjs";
import fs from "fs-extra";
// my helpers
import randomString from "../helpers/random.string";
import emailvalidate from "../helpers/email.validte";
import passwordValidate from "../helpers/passwd.validate";
import uploadImages from "../../../services/upload.image";
import jwtGiveToken from "../../../services/jwt";
import emailer from "../../../services/emailer";

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
    return;
  }
  const emailValid = emailvalidate(email);
  if (!emailValid.response) {
    res.json({ isCreated: false, message: emailValid.message });
    return;
  }
  const passwdValid = passwordValidate(password);
  if (!passwdValid.response) {
    res.json({ isCreated: false, message: passwdValid.message });
    return;
  }
  const passwordHashed = await bcrypt.hash(password, 10);

  const html = `<h2>Welcome ${full_name} </h2> <p>hope you enjoy the app and use when you need it</p> <br /><h3>In case you never has visit our app, please ignore this email and do not click the link</h3><p>To confirm your email just</p><a href="www.google.com" target="__blank">click here</a>`;

  if (await !emailer(email, "Welcome to TodoApp", html)) {
    res.json({
      isCreated: false,
      message:
        "Something was wrong sending a message to your email, please check it out",
    });
    return;
  }

  if (!req.file) {
    try {
      const user: any = await Users.create({
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
        // token: jwtGiveToken(user.id_user),
      });
    } catch (err) {
      res.send(err);
    }
    return;
  }
  const image = await uploadImages(req.file.path);
  try {
    const user: any = await Users.create({
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
      // token: jwtGiveToken(user.id_user),
    });
  } catch (err) {
    res.send(err);
  }
};
