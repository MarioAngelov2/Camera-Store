import mongoose, { model } from "mongoose";
const { Schema, Document } = mongoose;

export interface ICamera extends Document {
    name: string;
    price: string;
    discountPrice: string | null;
    cameraType: string;
    description: string;
    photos: string[];
}

const CameraSchema = new Schema<ICamera>({
    name: { type: String },
    price: { type: String },
    discountPrice: { type: String, default: null },
    cameraType: { type: String },
    description: { type: String },
    photos: [{ type: String }],
});

export const CameraModel = model<ICamera>("Camera", CameraSchema);
