import { Router } from "express";
import verifyToken from "../../../middlewares/verifyToken";
import {
  createNewTask,
  getAllTasks,
  getTasksByUser,
} from "../controllers/tasks.ctl";
const router = Router();

router.get("/all", getAllTasks);
router.post("/create", verifyToken, createNewTask);
router.get("/user", verifyToken, getTasksByUser);

export default router;
