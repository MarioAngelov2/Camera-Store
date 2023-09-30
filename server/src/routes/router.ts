import { Router } from "express";
import register from '../controllers/users/register'
import loginUser from "../controllers/users/login";
import createListing from "../controllers/admin/createListing";
import auth from '../middleware/auth'
import adminAuth from "../middleware/adminAuth";

const router = Router();

router.post('/register', register);
router.get('/login', loginUser);

router.post('/admin/create-listing', adminAuth, createListing);

export default router;
