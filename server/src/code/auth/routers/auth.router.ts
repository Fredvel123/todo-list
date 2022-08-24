import { Router } from "express";
import {
  confirEmail,
  createNewUser,
  registerUsers,
} from "../controllers/auth.ctl";
import upload from "../../../middlewares/multer";
const router = Router();

router.post("/signup", upload.single("avatar"), createNewUser);
router.get("/signin", registerUsers);
router.get("/:id", confirEmail);

export default router;
