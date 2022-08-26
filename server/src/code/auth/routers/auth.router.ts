import { Router } from "express";
import {
  confirEmail,
  createNewUser,
  editPassword,
  lostPassword,
  registerUsers,
} from "../controllers/auth.ctl";
import upload from "../../../middlewares/multer";
import verifyToken from "../../../middlewares/verifyToken";
const router = Router();

router.post("/signup", upload.single("avatar"), createNewUser);
router.post("/signin", registerUsers);
router.post("/editpsswd", verifyToken, editPassword);
router.get("/email/:id", confirEmail);
router.get("/lostpsswd/:email", lostPassword);

export default router;
