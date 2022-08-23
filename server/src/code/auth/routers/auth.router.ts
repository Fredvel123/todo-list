import { Router } from "express";
import {createNewUser} from '../controllers/auth.ctl';
const router = Router();

router.post('/signup', createNewUser);

export default router;