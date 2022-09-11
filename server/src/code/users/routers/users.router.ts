import { Router } from "express";
import verifyToken from "../../../middlewares/verifyToken";
import {
  editPassword,
  getAllUsers,
  getUserById,
} from "../controllers/users.ctl";
const router = Router();

router.get("/all", getAllUsers);
router.get("/user", verifyToken, getUserById);
router.post("/editpasswd", verifyToken, editPassword);

export default router;
