import User from "./user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const signup = async (userData) => {
    const data = { ...userData }
    const hashedPassword = await bcrypt.hash(data?.password, 12)
    data.password = hashedPassword
    const result = await User.create(data)
    return result
}


const login = async (userdata) => {
    // user exist
    const isUserExist = await User.findOne({ email: userdata?.email })
    if (!isUserExist) {
        throw new Error("user not found")
    }

    // password match


    const isPasswordMatched = await bcrypt.compare(userdata?.password, isUserExist?.password)
    if (!isPasswordMatched) {
        throw new Error("password did not match")
    }


    const userObj = {
        email: isUserExist?.email,
        role: isUserExist.role
    }
    const token = jwt.sign(userObj, "restaurant123", { expiresIn: "7d" })
    return {
        data: isUserExist,
        token: token
    }
}


const getSingleUser = async (id) => {
    const result = await User.findById(id)
    return result
}

// get all user
// update user -> email update korte parbe na,password update korte parbe na, role update korte parbe na
// delete user

const myProfile = async (email) => {
    const result = await User.findOne({ email: email }).select("name email")
    return result
}


const getAllUsers = async () => {
    return await User.find();
};



const updateUser = async (id, data) => {
    const { name, role } = data;
    const result = await User.findByIdAndUpdate(id, { name, role }, { new: true })
    return result;
}


const deleteUser = async (id) => {

    const deletedUser = await User.findByIdAndDelete(id);

    return deletedUser;

};



const userServices = {
    signup,
    getSingleUser,
    login,
    myProfile,
    getAllUsers,
    updateUser,
    deleteUser
}


export default userServices