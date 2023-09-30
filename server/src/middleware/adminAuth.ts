import { Request, Response, NextFunction } from "express";

const adminAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { role } = req.body.user;

        if (role !== "admin") {
            throw new Error("You are not authorized to access this route");
        }

        next();
    } catch (error) {
        console.log(error);
    }
};

export default adminAuth;
