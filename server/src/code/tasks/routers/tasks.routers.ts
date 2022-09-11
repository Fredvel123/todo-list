import { Router } from "express";
import { getAllTasks } from "../controllers/tasks.ctl";
const router = Router();

router.get("/all", getAllTasks);

export default router;
