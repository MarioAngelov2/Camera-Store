import { Request, Response } from "express";
import imageDownloader from "image-downloader";
import path from "path";

const parentDir = path.resolve(__dirname, "../../../");
const PATH_TO_UPLOADS = path.join(parentDir, "/assets/uploads/");

const uploadByLink = async (req: Request, res: Response) => {
    try {
        const { link } = req.body;

        if (!link) {
            throw new Error("No link provided or Invalid URL link");
        }

        let newName = "photo" + Date.now() + ".jpg";

        await imageDownloader.image({
            url: link,
            dest: PATH_TO_UPLOADS + newName,
        });
        res.json(newName);
    } catch (error) {
        console.log("Error downloading image: ", error);
    }
};

export default uploadByLink;
