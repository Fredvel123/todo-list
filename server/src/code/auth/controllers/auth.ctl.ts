import { Request, Response } from 'express';
import Users from '../models/user.models';

// Sign In
export const createNewUser = async (req: Request, res: Response) => {
  const {password, email, full_name} = req.body;
  res.json({password, email, full_name})
}