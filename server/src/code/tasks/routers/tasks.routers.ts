import { Router } from "express";
import verifyToken from "../../../middlewares/verifyToken";
import {
  createNewTask,
  editTaskByTaskId,
  getAllTasks,
  getTasksByUser,
} from "../controllers/tasks.ctl";
const router = Router();

router.get("/all", getAllTasks);
router.post("/create", verifyToken, createNewTask);
router.patch("/edit/:id_task", verifyToken, editTaskByTaskId);
router.get("/user", verifyToken, getTasksByUser);

export default router;
