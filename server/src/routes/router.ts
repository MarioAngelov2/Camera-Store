import { Router } from "express";
import register from '../controllers/users/register'
import loginUser from "../controllers/users/login";
import auth from '../middleware/auth'

const router = Router();

router.post('/register', register);
router.get('/login', loginUser);

export default router;
