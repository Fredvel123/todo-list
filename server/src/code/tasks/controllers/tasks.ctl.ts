import { Request, Response } from "express";
import Tasks from "../models/tasks.models";

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Tasks.findAll();
    if (tasks.length < 1) {
      res.json({ message: "no tasks added yet" });
      return;
    }
    res.json(tasks);
  } catch (err) {
    res.send(err);
  }
};
