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

export const getTasksByUser = async (req: Request | any, res: Response) => {
  try {
    const tasks = await Tasks.findAll({ where: { author: req.id } });
    res.json(tasks);
  } catch (err) {
    res.send(err);
  }
};

export const editTaskByTaskId = async (req: Request | any, res: Response) => {
  const { id_task } = req.params;
  const { title, description, status } = req.body;
  try {
    const taskEdited = await Tasks.update(
      { title, description, status, author: req.id },
      { where: { id_task } }
    );
    res.json({ message: "task edited successfully" });
  } catch (err) {
    res.send(err);
  }
};

export const removeTaskById = async (req: Request | any, res: Response) => {
  try {
    const { id_task } = req.params;
    await Tasks.destroy({ where: { id_task } });
    res.json({ message: "tasks was removed" });
  } catch (err) {
    res.send(err);
  }
};
