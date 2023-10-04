import { Router } from "express";
import register from "../controllers/users/register";
import loginUser from "../controllers/users/login";
import createListing from "../controllers/admin/createListing";
import deleteListing from "../controllers/admin/deleteListing";
import getListings from "../controllers/admin/getListings";
import auth from "../middleware/auth";
import adminAuth from "../middleware/adminAuth";
import logout from "../controllers/users/logout";

const router = Router();

router.post("/register", register);
router.get("/login", loginUser);

router.post("/admin/create-listing", createListing);
router.put("/admin/update-listing/:id", createListing);
router.delete("/admin/delete-listing/:id", deleteListing);
router.get("/admin/get-listings", getListings);
router.post("/admin/login", loginUser);
router.get("/admin/logout", logout)

export default router;
