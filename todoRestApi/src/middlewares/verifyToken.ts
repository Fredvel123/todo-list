import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { jwt_secret_key } from "../config/variablesEnviroment/dotenv";

interface Return {
  auth: boolean;
  message: string;
}

function verifyToken(req: any, res: Response, next: NextFunction): any {
  const token: any = req.headers["access-token"];
  if (!token) {
    res.json({ auth: false, message: "you don't have any token" });
    return;
  }
  try {
    const tokenValid: any = jwt.verify(token, jwt_secret_key || "tokentest");
    req.id = tokenValid.id;
    next();
  } catch (err) {
    res.send(err);
  }
}

export default verifyToken;
