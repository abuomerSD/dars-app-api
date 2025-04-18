import { userModel } from "../models/user";
import { User } from "../types/user";
import bcrypt from 'bcrypt';



export const saveUser = async (user: User) => {
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        const u = new userModel(user);
        const saved = await u.save();
        return saved;
    } catch (error) {
        console.log(error);
    }
}

export const deleteUserById = async (id: String) => {
    try {
        const deleted = await userModel.findByIdAndDelete(id);
        return deleted;
    } catch (error) {
        console.log(error);
    }
}

export const updateUserById = async (id: String, newUser: User) => {
    try {
        const hashedPassword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashedPassword;
        const updated = await userModel.findByIdAndUpdate({_id: id}, newUser);
        return updated;
    } catch (error) {
        console.log(error);
    }
}

export const findAllUsers = async () => {
    try {
        const users = await userModel.find();
        return users;
    } catch (error) {
        console.log(error);
    }
}

export const findUserById = async (id: String) => {
    try {
        const user = await userModel.findById(id);
        return user;
    } catch (error) {
        console.log(error);
    }
}