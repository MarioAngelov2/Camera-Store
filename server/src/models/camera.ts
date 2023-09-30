import mongoose, { model } from "mongoose";
const { Schema, Document } = mongoose;

export interface ICamera extends Document {
    name: string;
    price: string;
    discountPrice: string | null;
    cameraType: string;
    description: string;
    imageUrl: string;
}

const CameraSchema = new Schema<ICamera>({
    name: { type: String, required: true },
    price: { type: String, required: true },
    discountPrice: { type: String, default: null },
    cameraType: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String, required: true },
});

export const CameraModel = model<ICamera>("Camera", CameraSchema);
