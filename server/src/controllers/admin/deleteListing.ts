import { Request, Response, NextFunction, RequestParamHandler } from "express";
import { CameraModel } from "../../models/camera";
import fs from "fs";
import path from "path";

const deleteListing = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        console.log(req.params)
        const token = req.cookies.token;
        const id = req.params.id;

        const product = await CameraModel.findById(id).exec();

        if (!token) {
            throw new Error("Unauthorized");
        }

        if (!product) {
            throw new Error("Product not found");
        }

        const removeProduct = await CameraModel.findByIdAndRemove(id).exec();

        res.json(removeProduct);
    } catch (error) {
        console.log(error);
    }
};

export default deleteListing;
