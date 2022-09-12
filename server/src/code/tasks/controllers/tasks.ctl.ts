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

export const createNewTask = async (req: Request | any, res: Response) => {
  const { title, description, date } = req.body;
  const id = req.id;
  try {
    const taskCreated = await Tasks.create({
      title,
      description,
      author: id,
      create_at: new Date(),
      finished_at: date,
    });
    res.json({ message: "task create successfully", data: taskCreated });
  } catch (err) {
    res.send(err);
  }
};
