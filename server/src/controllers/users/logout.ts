import { Response, NextFunction } from "express";

const logout = async (res: Response<string>, next: NextFunction) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "none",
            secure: true,
        });

        res.json('Logout successful');
    } catch (error) {
        console.log(error);
    }
};

export default logout;
