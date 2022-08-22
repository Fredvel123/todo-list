import { Router } from "express";
import { getAllUsers } from '../controllers/users.ctl';
const router = Router();

router.get('/all', getAllUsers);


export default router;