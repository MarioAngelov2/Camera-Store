import jwt from "jsonwebtoken";
import {Request, Response, NextFunction} from "express";

const authorize = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;
        const decode = jwt.verify(token, process.env.JWT_SECRET as string);
        req.body.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
}

export default authorize;