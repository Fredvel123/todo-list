import { Router } from "express";
import verifyToken from "../../../middlewares/verifyToken";
import { createNewTask, getAllTasks } from "../controllers/tasks.ctl";
const router = Router();

router.get("/all", getAllTasks);
router.post("/create", verifyToken, createNewTask);

export default router;
