import { Router } from "express";
import register from "../controllers/users/register";
import loginUser from "../controllers/users/login";
import createListing from "../controllers/admin/createListing";
import deleteListing from "../controllers/admin/deleteListing";
import getListings from "../controllers/admin/getListings";
import auth from "../middleware/auth";
import adminAuth from "../middleware/adminAuth";
import logout from "../controllers/users/logout";
import uploadByLink from "../controllers/admin/uploadByLink";
import uploadFromDevice from "../controllers/admin/uploadFromDevice";
import multer from "multer";
import path from "path";

const parentDir = path.resolve(__dirname, "../../");
const PATH_TO_UPLOADS = path.join(parentDir, "/assets/uploads/");
const photosMiddleware = multer({ dest: PATH_TO_UPLOADS });

const router = Router();

// general routes
router.post("/register", register);
router.get("/login", loginUser);


// upload photos
router.post("/admin/upload-by-link", uploadByLink);
router.post(
    "/admin/upload",
    photosMiddleware.array("photos", 5),
    uploadFromDevice
);

// admin routes
router.post("/admin/create-listing", createListing);
router.put("/admin/update-listing/:id", createListing);
router.delete("/admin/delete-listing/:id", deleteListing);
router.get("/admin/get-listings", getListings);
router.post("/admin/login", loginUser);
router.get("/admin/logout", logout);


export default router;
