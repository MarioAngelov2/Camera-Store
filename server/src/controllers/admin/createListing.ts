import { Request, Response, NextFunction } from "express";
import { CameraModel } from "../../models/camera";
import createHttpError from "http-errors";
import jwt from "jsonwebtoken";

interface ICreateListing {
    name: string;
    price: string;
    discountPrice: string;
    cameraType: string;
    description: string;
    photos: string[];
}

const createListing = async (
    req: Request<{}, {}, ICreateListing>,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.cookies.token;

        const { name, price, discountPrice, cameraType, description, photos } =
            req.body;

        if (!name || !price || !cameraType) {
            throw new createHttpError.BadRequest("Missing required fields");
        }

        const decodedToken = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        );

        if (!decodedToken) {
            throw new createHttpError.Unauthorized("Unauthorized");
        }

        const newCamera = new CameraModel({
            name,
            price,
            discountPrice,
            cameraType,
            description,
            photos,
        });

        await newCamera.save();
        res.json(newCamera);
    } catch (error) {
        console.log(error);
    }
};

export default createListing;
