import { Router } from "express";
import verifyToken from "../../../middlewares/verifyToken";
import {
  createNewTask,
  editTaskByTaskId,
  getAllTasks,
  getTasksByUser,
  removeTaskById,
} from "../controllers/tasks.ctl";
const router = Router();

router.get("/all", getAllTasks);
router.post("/create", verifyToken, createNewTask);
router.patch("/edit/:id_task", verifyToken, editTaskByTaskId);
router.get("/user", verifyToken, getTasksByUser);
router.delete("/remove/:id_task", removeTaskById);
export default router;
