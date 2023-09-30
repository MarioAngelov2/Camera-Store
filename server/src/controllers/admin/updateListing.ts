import { Request, Response, NextFunction } from "express";
import { CameraModel } from "../../models/camera";
import createHttpError from "http-errors";
import jwt from "jsonwebtoken";

const updateListing = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.cookies;
        const id = req.params;

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

        const product = await CameraModel.findById(id).exec();

        if (!product) {
            throw new createHttpError.NotFound("Product not found");
        }

        product.set({
            name,
            price,
            discountPrice,
            cameraType,
            description,
            photos,
        });

        await product.save();
        res.json(product);
    } catch (error) {
        console.log(error);
    }
};

export default updateListing;
