import { Router } from "express";
import upload from "../../../middlewares/multer";
import verifyToken from "../../../middlewares/verifyToken";
import {
  deleteUser,
  editAvatar,
  editPassword,
  getAllUsers,
  getUserById,
} from "../controllers/users.ctl";
const router = Router();

router.get("/all", getAllUsers);
router.get("/user", verifyToken, getUserById);
router.post("/editpasswd", verifyToken, editPassword);
router.delete("/delete", verifyToken, deleteUser);
router.post("/avatar", verifyToken, upload.single("avatar"), editAvatar);

export default router;
