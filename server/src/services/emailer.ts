import nodemailer from "nodemailer";
import {
  email_google_key,
  email_server,
} from "../config/variablesEnviroment/dotenv";

export default async function emailer(
  email_user: string,
  subject: string,
  html: string
): Promise<boolean> {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: email_server,
      pass: email_google_key,
    },
  });

  const mailOptions = {
    from: email_server,
    to: email_user,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email_user}`);
    return Promise.resolve(true);
  } catch (err) {
    console.error(err);
    return Promise.resolve(false);
  }
}
