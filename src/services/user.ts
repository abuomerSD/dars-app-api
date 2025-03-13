import { userModel } from "../models/user";
import { User } from "../types/user";

export const saveUser = async (user: User) => {
    try {
        const u = new userModel(user);
        const saved = await u.save();
        return saved;
    } catch (error) {
        console.log(error);
    }
}