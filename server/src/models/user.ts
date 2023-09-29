import mongoose, { model } from "mongoose";
const { Schema, Document } = mongoose;

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: "admin" | "user" | "undefined";
}

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
});

export const UserModel = model<IUser>("User", UserSchema);
