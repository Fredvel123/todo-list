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
import jwtGiveToken from "../../../services/jwt";

// Sign Up
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
  const email_code = randomString(12);
  const html = `<h2>Welcome ${full_name} </h2> <p>hope you enjoy the app and use when you need it</p> <br /><h3>In case you never has visit our app, please ignore this email and do not click the link</h3><p>To confirm your email just</p><a href="https://todoapp-fredd.up.railway.app/api/auth/email/${email_code}" target="__blank">click here</a>`;
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
        email_key: email_code,
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
      email_key: email_code,
      create_at: new Date(),
      avatar: image.img_url,
      cloud_id: image.img_id,
    });
    res.json({
      statusCode: 200,
      isCreated: true,
      message:
        "User was created successfully, we sent an email to your email, please go and check it out",
    });
  } catch (err) {
    res.send(err);
  }
  req.file ? await fs.remove(req.file.path) : null;
};

// Sign In
export const registerUsers = async (req: Request, res: Response) => {
  const { password, email } = req.body;
  const user: any = await Users.findOne({ where: { email } });
  if (!user) {
    res.json({
      auth: false,
      message: `Your email: ${email}, doesn't exists`,
    });
    return;
  }
  const emailValidated = emailvalidate(email);
  if (!emailValidated.response) {
    res.json({ auth: false, message: emailValidated.message });
    return;
  }
  const passwordValidated = passwordValidate(password);
  if (!passwordValidated.response) {
    res.json({ auth: false, message: passwordValidated.message });
    return;
  }

  if (!user.email_confirmed) {
    res.json({
      auth: false,
      message: "Your email is not confirmed, it should be in your email",
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    res.json({ auth: false, message: "Your password is not correct" });
    return;
  }
  res.json({
    auth: true,
    token: jwtGiveToken(user.id_user),
    user: {
      full_name: user.full_name,
      created_at: user.create_at,
      avatar: user.avatar,
    },
  });
};

// confirm email
export const confirEmail = async (req: Request, res: Response) => {
  const { id } = req.params;
  const emailConfirmed: any = await Users.findOne({ where: { email_key: id } });
  if (!emailConfirmed) {
    res.send("<h2>Your key is not correct</h2>");
    return;
  }
  emailConfirmed.email_confirmed = true;
  await emailConfirmed.save();
  res.redirect("https://todo-fredvel.up.railway.app/");
};

// lost password
export const lostPassword = async (req: Request, res: Response) => {
  const { email } = req.params;
  const user: any = await Users.findOne({ where: { email } });

  if (!user) {
    res.json({
      message: "Your email is not valid, please enter a valid password",
    });
    return;
  }
  const newRandomPassword = randomString(12);
  const html = `<h1>Hi ${user.full_name}, welcome back</h1>
    <p>This is your new password: ${newRandomPassword}</p>
    <p>First of all Sign In TodoApp again</p>
    <p>Then with this password you can change your password</p>
    <a href="https://www.google.com" target="__black">Sign In</a>`;

  const emailSent = await emailer(email, "New password", html);
  if (!emailSent) {
    res.json({ message: "Something was wrong sending email" });
    return;
  }
  const passwordHashed = await bcrypt.hash(newRandomPassword, 10);

  user.password = passwordHashed;
  await user.save();
  res.json({
    message: `${user.full_name}, we sent you a email with your new password, please check it out`,
  });
};
