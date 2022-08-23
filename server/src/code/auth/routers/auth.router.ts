import { Router } from "express";
import { createNewUser } from "../controllers/auth.ctl";
import upload from "../../../middlewares/multer";
const router = Router();

router.post("/signup", upload.single("avatar"), createNewUser);

export default router;
