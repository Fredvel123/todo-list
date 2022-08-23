// code to give token
import "dotenv/config";
import jwt from "jsonwebtoken";
import { jwt_secret_key } from "../config/variablesEnviroment/dotenv";

export default function jwtGiveToken(user_id: number) {
  const token = jwt.sign({ id: user_id }, jwt_secret_key || "tokentest", {
    expiresIn: 60 * 60 * 24 * 2,
  });
  return token;
}
