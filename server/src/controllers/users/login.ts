import { Request, Response, NextFunction } from "express";
import { UserModel } from "../../models/user";
import bcrypt from "bcrypt";
import createHttpError from "http-errors";
import jwt from "jsonwebtoken";

interface LoginRequestBody {
    email: string;
    password: string;
}

const loginUser = async (
    req: Request<{}, {}, LoginRequestBody>,
    res: Response,
    next: NextFunction
) => {
    try {
        console.log(req.body)
        const { email, password } = req.body;

        // if (!email || !password) {
        //     throw new createHttpError.BadRequest("Missing required fields");
        // }

        const existingUser = await UserModel.findOne({ email: email }).exec();

        if (!existingUser) {
            throw new createHttpError.NotFound("User not found");
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            existingUser.password
        );

        if (!isPasswordCorrect) {
            throw new createHttpError.Unauthorized(
                "Username or password is incorrect"
            );
        }

        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id, role: existingUser.role },
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        }).json(existingUser);
    } catch (error) {
        console.log(error);
    }
};

export default loginUser;