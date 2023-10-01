import { Request, Response, NextFunction } from "express";
import { CameraModel } from "../../models/camera";
import createHttpError from "http-errors";

const getListings = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await CameraModel.find({}).exec();

        if (!products) {
            throw new createHttpError.NotFound("Products not found");
        }

        res.json(products);
    } catch (error) {
        console.log(error);
    }
};

export default getListings;
