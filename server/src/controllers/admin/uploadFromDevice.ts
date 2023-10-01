import { Request, Response, NextFunction } from "express";
import fs from "fs";

const uploadPhotosFromDevice = async (
    req: Request<{}, {}, string>,
    res: Response,
    next: NextFunction
) => {
    try {
        const uploadedFiles: string[] = [];

        if (Array.isArray(req.files)) {
            for (let i = 0; i < req.files.length; i++) {
                const { path, originalname } = req.files[i];
                const parts = originalname.split(".");
                console.log(parts);
                const extension = parts[parts.length - 1];
                const newPath = path + "." + extension;
                fs.renameSync(path, newPath);
                uploadedFiles.push(
                    newPath.replace(
                        "/Users/marioangelov/Desktop/Projects/Camera-Store/server/src/uploads/",
                        ""
                    )
                );
            }
        }

        res.json(uploadedFiles);
    } catch (error) {
        console.log(error);
    }
};
