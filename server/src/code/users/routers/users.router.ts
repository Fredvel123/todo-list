import { Router } from "express";
import verifyToken from "../../../middlewares/verifyToken";
import { editPassword, getAllUsers } from "../controllers/users.ctl";
const router = Router();

router.get("/all", getAllUsers);
router.post("/editpasswd", verifyToken, editPassword);

export default router;
