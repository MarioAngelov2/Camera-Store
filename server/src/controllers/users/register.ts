import { NextFunction, Request, Response } from "express";
import { UserModel, IUser } from "models/user";
import bcrypt from "bcrypt";
import createHttpError from "http-errors";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            throw new createHttpError.BadRequest("Missing required fields");
        }

        const existingUser = await UserModel.findOne({ email: email }).exec();

        if (!existingUser) {
            throw new createHttpError.Conflict("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully", newUser });
    } catch (error) {
        console.log(error);
    }
};

export default createUser;